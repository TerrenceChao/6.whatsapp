FROM nginx:1.14-alpine

COPY ./conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY ./html/ /etc/nginx/html/
COPY ./log /var/log/nginx