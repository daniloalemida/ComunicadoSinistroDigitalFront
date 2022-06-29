FROM node:latest as angular
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]



#RUN npm install --silent
COPY . .
#RUN npm biuld

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/SinistroDigital /usr/share/nginx/html
COPY ./config/nginx.conf /etc/ngix/conf.d/default.conf

