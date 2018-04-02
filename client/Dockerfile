FROM node:carbon as node

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend

RUN npm install

COPY . /frontend

RUN npm run build

FROM nginx

COPY --from=node /frontend/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
