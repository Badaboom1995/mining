FROM node:carbon
RUN mkdir -p /server
WORKDIR /server

COPY ./package.json /server
COPY ./wait-for-it.sh /server
COPY ./tsconfig.json /server
COPY ./src /server

RUN npm install
RUN npm run build
CMD npm run start:prod

USER node

EXPOSE 3000
