FROM node:alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm install && \
    npm ci

CMD ["npm", "start"]