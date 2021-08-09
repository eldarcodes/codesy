FROM node:14

WORKDIR /usr/src/app

RUN yarn global add lerna 

COPY package.json .
COPY yarn.lock .
RUN yarn 

COPY packages/server ./packages/server
COPY packages/common ./packages/common

COPY packages/server/.env.production ./packages/server/.env 

COPY lerna.json .
RUN lerna bootstrap

RUN yarn build:server

WORKDIR ./packages/server

ENV NODE_ENV production

CMD ["node", "dist/index.js"]
USER node
