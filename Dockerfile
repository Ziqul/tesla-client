FROM node:10.15.3-stretch-slim

COPY . /web/
WORKDIR /web/

RUN npm ci

CMD ["npm", "start"]
