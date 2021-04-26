FROM node:12.16.1-alpine

ARG PORT

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install express --save

COPY . .

EXPOSE $PORT

CMD ["node", "server.js", "$PORT"]