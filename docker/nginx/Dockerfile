############################################################
## ---------------DO NOT EDIT THIS BLOCK------------------##
## -------------IT IS USED IN AUTOMATIONS!----------------##
## NGINX for UUP                                          ##
## Version: 6                                             ##
## Updated: 1/4/23                                        ##
############################################################

FROM nginx:1.24.0-alpine3.17 as base
ARG FPM_HOST=127.0.0.1

# Add custom configuration
COPY docker/nginx/dusk/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
RUN sed -i "s/fastcgi_pass_network_address/${FPM_HOST}/g" /etc/nginx/conf.d/default.conf

# Add Laravel public directory to nginx container so that static files in horizon/telescope can be delivered
RUN mkdir -p /app/public
ADD public/ /app/public

EXPOSE 8080
