FROM node:8.11-alpine
WORKDIR /usr/src/app
RUN apk update -q &&  apk add python -q && apk add make && apk add g++ -q
RUN npm i -g @angular/cli
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN cd front-end && npm install --silent && npm rebuild node-sass && ng build
RUN cd ..

EXPOSE 80 443 3000
CMD [ "npm", "start" ]
