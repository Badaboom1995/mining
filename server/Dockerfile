FROM node:carbon

WORKDIR /server

COPY ./package.json /server
COPY ./wait-for-it.sh /server
COPY ./tsconfig.json /server
COPY ./src /server
COPY ./public ${BACKEND_PATH}/public

RUN npm install
RUN npm run prestart:prod
CMD npm run start:prod

USER node

EXPOSE 3000
