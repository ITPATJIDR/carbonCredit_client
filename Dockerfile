FROM node:18-alpine3.17 as build

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM ubuntu

RUN apt-get update

RUN apt-get install -y nginx 

COPY nginx.conf /etc/nginx/conf.d/

COPY --from=build /app/dist /var/www/html/

EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]