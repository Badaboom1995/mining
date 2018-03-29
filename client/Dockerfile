FROM node:carbon

WORKDIR /client
COPY . .

RUN npm install

RUN npm install -g http-server
RUN npm run build
WORKDIR ./dist

CMD hs -p 3333

EXPOSE 3333
