FROM node:16.19.0 as buil

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.24.0-alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=buil /app/dist/web-app/ /usr/share/nginx/html

