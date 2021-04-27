FROM node:12.16.1-alpine

ARG PORT

ENV PORT ${PORT}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install express --save

COPY . .

EXPOSE ${PORT}

CMD node messagingService.js ${PORT}
