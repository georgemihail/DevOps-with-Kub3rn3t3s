FROM node:alpine

WORKDIR /app

COPY . /

RUN npm install && \
    npm ci

EXPOSE 3001
CMD ["npm", "start"]