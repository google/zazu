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
  * [Business Overview](https://docs.google.com/presentation/d/1_ZW2Kz-lv_G8oUCE2D1-2inUHJymkzQ7oCni5LXZl5M/edit#slide=id.g363d74ec1e_0_45)  
  * [Technical Overview](https://docs.google.com/presentation/d/1DOwl_EesvlmE_FSkgWWXBwvMYIcrJJ3e5g5JHzfIefU/edit#slide=id.g363d74ec1e_0_45)   
  * [Repository](https://github.com/google/zazu)

## Prerequisites

1. Billing method available or already set up on the [Google Cloud Platform (GCP)](https://pantheon.corp.google.com/billing).
2. Docker installed: [Instructions here](https://docs.docker.com/install/).

## Installation steps
1. Create a new project in [GCP](https://console.cloud.google.com/home/dashboard).
2. APIs & Services > Dashboard > If not already enabled, enable the Big Query and Google+ APIs.
3. Run `git clone https://github.com/google/zazu.git` in a desired directory.
4. `cd <directory_of_step_3>/zazu`
5. Add your key and certificate, <key_name>.key and <cert_name>.crt for https under <directory_of_step_3>/zazu/encryption. For your key and certificate, talk to your admin.<br/>
   **Note:** If you do not have a key and certificate yet, you can generate a self signed key/certificate for testing purposes, by running the following commands.<br/>
            `openssl genrsa -des3 -out <key_name>.key 1024`<br/>
            `openssl req -new -key <key_name>.key -out <cert_name>.csr`<br/>
            `openssl x509 -req -days 365 -in zazu.csr -signkey <key_name>.key -out <cert_name>.crt`<br/>

6. `cd <directory_of_step_3>/zazu; docker build -t zazuimg .`
7. Follow the "Push Docker images to the Google Container Registry" section [here](https://cloud.google.com/container-registry/docs/pushing-and-pulling).
8. Provision a service account on GCP.<br/>
      IAM > Service accounts > Create service accounts<br/>
        a. Name: **service-zazu-app**<br/>
        b. Role: **Project -> Owner**<br/>

9. Grant the service account permissions to read from the container registry: [Instructions here](https://cloud.google.com/container-registry/docs/access-control#granting_users_and_other_projects_access_to_a_registry). User the service account name you created on **step 8**.

10. Provision one static IP address for the application. Give it an appropriate name like **zazu-app**.<br/>
       VPC > Extrenal IP addresses > Reserve static address<br/>

11. Create a set of OAuth credentials and keep note of the client ID/secret.<br/>
       APIs & Services > Credentials > Create credentials > OAuth client ID.

12. Set up firewall rules.<br/>
      a. VPC > Firewall rules > Create firewall rules<br/>
             i. Name: **zazu-db**<br/>
            ii. Description: Allow connections to zazu database from zazu app.<br/>
           iii. Target tags: **zazu-db**<br/>
            iv. Source tags: **zazu-app**<br/>
             v. Protocols and ports: **tcp:27017** (which is the default port of mongodb. Change it to a different one, if mongodb is setup to run on a different port.)<br/>
      b. VPC > Firewall rules > Create firewall rules<br/>
             i. Name: **zazu-app**<br/>
            ii. Description: Allow connections to zazu app from the www.<br/>
           iii. Target tags: **zazu-app**, **https-server**<br/>
            iv. Protocols and ports: **tcp:443**<br/>

13. Create a new VM instance for the mongodb.<br/>
      a. Deploy a container image.<br/>
             i. Type **mongo** as the docker image.<br/>
            ii. Advanced Container Options > Environment variable<br/>
                    **MONGO_INITDB_ROOT_USERNAME <select_root_username>**<br/>
                    **MONGO_INITDB_ROOT_PASSWORD <select_root_password>**<br/>
                    **MONGO_INITDB_DATABASE <select_db_name>**<br/>
                The above parameters you may choose as desired.<br/>
      b. Boot Disk > SSD Persistent Disk<br/>
      c. Service account: Select the one created on step 8.<br/>
      d. Networking > Network tags > **zazu-db**.<br/>

14. Create a new VM instance for the App<br/>
       a. Deploy a container image<br/>
            i. Use path from gcr.io where you published the Docker image on **step 7**.<br/>
           ii. Advanced Container Options > Environment variables<br/>
                  **bq_instance  <GCP_project_name>**<br/>
                  **bq_dataset   Zazu_Config_Data**<br/>
                  **bq_client_dataset  Report_Data**<br/>
                  **bq_views_dataset   Accessible_Views**<br/>
                  **bq_client_data_perms <table_name_in_BQ_client_data>**<br/>
                  **bq_client_data_base  <table_name_in_BQ_client_data>_base**<br/>
                  **google_client_id <OAuth_client_ID_step_10>**<br/>
                  **google_client_secret <OAuth_client_secret_step_10>**<br/>
                  **session_secret  <choose_any_string_for_sess_encr>**<br/>
			            **PORT   443**<br/>
                  **https_key_filename  <your_https_key_filename_used_in_step_5>**<br/>
                  **https_cert_filename  <your_https_cert_filename_used_in_step_5>**<br/>
                  **mongo_connection_string mongodb:/<MONGO_INITDB_ROOT_USERNAME>:<MONGO_INITDB_ROOT_PASSWORD>@<DNS>/<MONGO_INITDB_DATABASE>**<br/>

              **Note:** MONGO_INITDB values come from **step 13**. The DNS looks like: zazu-db.c.PROJECTNAME.internal. Template: INSTANCENAME.c.PROJECTNAME.internal.<br/>

       b. Boot Disk > SSD Persistent Disk<br/>
       c. Allow HTTPS.<br/>
       d. Networking > assign the provisioned static IP address as the external IP (**step 10**).<br/>
       e. Service account: Select the one created on **step 8**.<br/>
       f. Networking > Network tags > **zazu-app**<br/>

15. **One time only**: Create the first admin user of the application in mongodb.<br/>
       Compute engine > VM instances > zazu-db > SSH<br/>
           a. `docker ps -a`<br/>
           b. `docker exec -it <container_id> sh`<br/>
           c. `mongo <select_db_name> -u <select_root_username> -p <select_root_password>` (from **step 13a.**)<br/>
           d. `db.users.insert({ name: "<your_admin_name>", email: "<your_admin_email>", google_email: "<your_admin_google_id>", organization: "<your_company_name>", role: "retailer", accesses: [] })`<br/>

16. **One time only**: Create the **same** first admin user of the application as in **step 15**, in Big Query.<br/>
       https://bigquery.cloud.google.com > Select the project > Compose query ><br/>
              `INSERT INTO `<project_name>.Zazu_Config_Data.users` (user_id, google_email, email, organization, role) VALUES (1, '<your_admin_google_id>', '<your_admin_email>', '<your_company_name>', 'retailer')`<br/>


## Support

This project is in alpha - for questions please contact the project owners amete@google.com & jmattarian@google.com.  Note - while in alpha, select organizations will be approved to receive technical, analytical and engineering support from Google.  If interested in the alpha, please send requests to amete@google.com. For bugs, comments or enhancements, please submit directly at our [public repository](https://github.com/google/zazu).  Note we are also interested in collaborators interested in contributing to the application - if you'd like to make a contribution to the code base, please make a pull request.
