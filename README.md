# Zazu - Vendor Coop Reporting [in alpha]
An unopinionated, scalable reporting application built on [Google Cloud Platform](http://nodejs.org) and [Data Studio](https://www.google.com/analytics/data-studio/) for vendor-coop reporting.

## What is Vendor-Coop?
Vendor-coop is a form of joint marketing where organizations pool together resources and expertise to acheive a joint goal.  In the classic case, consider a retailer that sells vacuum cleaners from a specific manufacturer.  The retailer and the manufacturer might pool together marketing budget, data and creative content to launch a joint marketing campaign to attract consumers to a retail location to purchase vacuums from the manufacturer - a win-win for retailer and manufacturer.  In this context, the manufacturer, generally referred to as the vendor, provides resources to the retailer, where the retailer plans and executes the joint marketing campaign.

## What is Zazu?
Zazu is an open-source application that can be used as scalable infrastructure to help facilitate reporting between organizations.  In the case of the retailer and manufacturer, Zazu is an application that the retailer can deploy such that the retailer can share 1st party data directly to the manufacturer in a controlled, secure and private manner.  As an example, the retailer may choose to report impressions, store visits or revenue as a metric to the manufacturer to show the business results driven by the joint marketing campaign.

## Dependencies

Zazu integrates several popular production reliable web, data and analytics technologies:

  * [Google Identity Platform](https://developers.google.com/identity/) - to authorize and manage accesses
  * [Data Studio](https://www.google.com/analytics/data-studio/) - to design and disseminate web-based reports and dashboards
  * [BigQuery](https://cloud.google.com/bigquery/) - data warehouse for staging and querying data for reports
  * [Angular](https://angular.io/) - application client for web
  * [Node.js](https://nodejs.org/en/)- application server
  * [MongoDB](https://www.mongodb.com/) - document storage for application metadata

## Docs

  * [Website and Documentation](http://zazu.report/)
  * [Business Overview](https://docs.google.com/a/google.com/presentation/d/e/2PACX-1vQl_gbYic88bmTw9OXp1-aGCaDt12VFitUSqweuJeYSjqjcRBBNozfrBC1UEHH8soNcQoXzdArkb5Hk/pub?start=false&loop=false&delayms=3000)  
  * [Technical Overview](https://docs.google.com/a/google.com/presentation/d/e/2PACX-1vQT5GFcH-dlZw6jtTySSbZlsrZXqfKNsDYgbgwkq9KaeoHGudiIkUKCwoKmScqkcMEKKnuuXWZyc_BB/pub?start=false&loop=false&delayms=3000)   
  * [Repository](https://github.com/google/zazu)

## Prerequisites

1. Billing method available or already set up on the [Google Cloud Platform (GCP)](https://pantheon.corp.google.com/billing).
2. Docker installed: [Instructions here](https://docs.docker.com/install/).
3. Google Cloud SDK installed: [Instructions here](https://cloud.google.com/sdk/docs/).

## Installation steps
1. Create a new project in [GCP](https://console.cloud.google.com/home/dashboard).
2. APIs & Services > Dashboard > If not already enabled, enable the Big Query, Google+ API and Google Container Registry.
3. Run `git clone https://github.com/google/zazu.git` in a desired directory.
4. `cd <directory_of_step_3>/zazu`
5. Add your key and certificate, <key_name>.key and <cert_name>.crt for https under <directory_of_step_3>/zazu/encryption. For your key and certificate, talk to your admin.<br/>
   **Note:** If you do not have a key and certificate yet, you can generate a self signed key/certificate for testing purposes, by running the following commands.<br/>
            `openssl genrsa -des3 -out <key_name>.key 1024`<br/>
            `openssl req -new -key <key_name>.key -out <cert_name>.csr`<br/>
            `openssl x509 -req -days 365 -in zazu.csr -signkey <key_name>.key -out <cert_name>.crt`<br/>

6. `cd <directory_of_step_3>/zazu; docker build -t zazuimg .`
7. Push your Docker image to the Google Container Registry.
   - `gcloud auth configure-docker`
   - `docker tag zazuimg gcr.io/<project_id>/zazuimg`
   - `docker push gcr.io/<project_id>/zazuimg`

8. Provision a service account on GCP. No checkbox is needed to be selected.
   - IAM > Service accounts > Create service accounts<br/>
     - Name: **service-zazu-app**<br/>
     - Role: **Project -> Owner**<br/>

9. Grant the service account permissions to read from the container registry: [Instructions here](https://cloud.google.com/container-registry/docs/access-control#granting_users_and_other_projects_access_to_a_registry). Use the service account name you created on **step 8**.

10. Provision one static IP address for the application. Give it an appropriate name like **zazu-app**.
    - VPC > Extrenal IP addresses > Reserve static address<br/>

11. Create a set of OAuth credentials and keep note of the client ID/secret.
    - APIs & Services > Credentials > Create credentials > OAuth client ID.
    - Authentication Javascript origin: https://<your_domain_to_be_assigned_to_app>
    - Authentication redirect URI: https://<your_domain_to_be_assigned_to_app>/auth/google/callback

12. Set up firewall rules.
    - VPC > Firewall rules > Create firewall rules
      - Name: **zazu-db**
      - Description: Allow connections to zazu database from zazu app.
      - Target tags: **zazu-db**
      - Source tags: **zazu-app**
      - Source IP ranges: 0.0.0.0/0
      - Protocols and ports: **tcp:27017** (which is the default port of mongodb. Change it to a different one, if mongodb is setup to run on a different port.)
    - VPC > Firewall rules > Create firewall rules
      - Name: **zazu-app**
      - Description: Allow connections to zazu app from the www.
      - Target tags: **zazu-app**, **https-server**
      - Source IP ranges: 0.0.0.0/0
      - Protocols and ports: **tcp:443**

13. Create a new VM instance for the mongodb.
    - Deploy a container image.
      - Type **mongo** as the docker image.
      - Advanced Container Options > Environment variable<br/>
        **MONGO_INITDB_ROOT_USERNAME <select_root_username>**<br/>
        **MONGO_INITDB_ROOT_PASSWORD <select_root_password>**<br/>
        **MONGO_INITDB_DATABASE zazu**<br/>
        The above parameters you may choose as desired.
    - Boot Disk > SSD Persistent Disk
    - Service account: Select the one created on **step 8**.
    - Networking > Network tags > **zazu-db**.

14. Create a new VM instance for the App
    - Deploy a container image
      - Use path from gcr.io where you published the Docker image on **step 7**.
      - Advanced Container Options > Environment variables
                  **bq_instance  <GCP_project_name>**<br/>
                  **bq_dataset   Zazu_Config_Data**<br/>
                  **bq_client_dataset  Report_Data**<br/>
                  **bq_views_dataset   Accessible_Views**<br/>
                  **bq_client_data_base  <table_name_in_BQ_client_data>**<br/>
                  **google_client_id <OAuth_client_ID_step_10>**<br/>
                  **google_client_secret <OAuth_client_secret_step_10>**<br/>
                  **session_secret  <choose_any_string_for_sess_encr>**<br/>
                  **PORT   443**<br/>
                  **https_key_filename  <your_https_key_filename_used_in_step_5>**<br/>
                  **https_cert_filename  <your_https_cert_filename_used_in_step_5>**<br/>
                  **https_passphrase  <your_https_passphrase_used_in_step_5>**<br/>
                  **mongo_connection_string mongodb://<MONGO_INITDB_ROOT_USERNAME>:<MONGO_INITDB_ROOT_PASSWORD>@<DNS_NAME>/zazu**<br/>

      **Note:** MONGO_INITDB values come from **step 13**. The DNS_NAME looks like: **zazu-db.c.PROJECTNAME.internal** . Template: **INSTANCENAME.c.PROJECTNAME.internal** .<br/>

      - Boot Disk > SSD Persistent Disk
      - Allow HTTPS.
      - Networking > assign the provisioned static IP address as the external IP (**step 10**).
      - Networking > Public DNS PTR record: assign the domain you will be assigning to the app without the https:// part.
      - Service account: Select the one created on **step 8**.
      - Networking > Network tags > **zazu-app**

15. **One time only**: Create the first admin user of the application in mongodb.
    - Compute engine > VM instances > zazu-db > SSH
      - `docker ps -a`
      - `docker exec -it <container_id> sh`
      - `mongo admin -u <select_root_username> -p <select_root_password>` (from **step 13a.**)
      - `use zazu`
      - `db.users.insert({ name: "<your_admin_name>", email: "<your_admin_email>", google_email: "<your_admin_google_id>", organization: "<your_company_name>", role: "retailer", accesses: [] })`

16. **One time only**: Create the **same** first admin user of the application as in **step 15**, in Big Query.
    - https://bigquery.cloud.google.com > Select the project > Compose query ><br/>
      `INSERT INTO `<project_name>.Zazu_Config_Data.users` (user_id, google_email, email, organization, role) VALUES (1, '<your_admin_google_id>', '<your_admin_email>', '<your_company_name>', 'retailer')`


## Support

This project is in alpha - for questions please contact the project owners amete@google.com & jmattarian@google.com.  Note - while in alpha, select organizations will be approved to receive technical, analytical and engineering support from Google.  If interested in the alpha, please send requests to amete@google.com. For bugs, comments or enhancements, please submit directly at our [public repository](https://github.com/google/zazu).  Note we are also interested in collaborators interested in contributing to the application - if you'd like to make a contribution to the code base, please make a pull request.
