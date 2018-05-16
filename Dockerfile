FROM node:8.11-alpine
WORKDIR /usr/src/app
RUN npm i -g @angular/cli
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod

EXPOSE 80 443 3000
CMD [ "node", "server.js" ]
