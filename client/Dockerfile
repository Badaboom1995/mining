FROM node:carbon as node

RUN mkdir -p /frontend
WORKDIR /frontend

COPY package.json /frontend

RUN npm install

COPY . /frontend

RUN npm run build

FROM wernight/alpine-nginx-pagespeed

COPY --from=node /frontend/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
