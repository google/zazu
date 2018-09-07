FROM node:8.11-alpine
WORKDIR /usr/src/app
RUN apk update -q &&  apk add python -q && apk add make && apk add g++ -q
RUN npm i -g @angular/cli
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod

EXPOSE 80 443 3000
CMD [ "node", "server.js" ]
