FROM node:12

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "start:dev" ]