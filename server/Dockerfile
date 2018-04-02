FROM node:carbon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app
COPY ./wait-for-it.sh /usr/src/app
COPY ./tsconfig.json /usr/src/app
COPY ./src /usr/src/app

RUN npm install
RUN npm run build
CMD npm run start:prod

USER node

EXPOSE 3000
