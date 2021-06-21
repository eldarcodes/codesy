FROM node:14
WORKDIR /usr/app

COPY . .

RUN yarn
RUN yarn build:server 

ENV NODE_ENV=production

EXPOSE 4000

CMD cd ./packages/server && node ./dist/index.js
USER node