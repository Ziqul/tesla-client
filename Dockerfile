FROM node:10.15.3-stretch-slim

WORKDIR /web/
COPY package* /web/

RUN npm ci --production

COPY . /web/

CMD ["npm", "start"]
