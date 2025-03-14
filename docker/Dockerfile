##########################################
# STAGE: base
##########################################
# STAGE: base
##########################################
FROM php:8.2-fpm-alpine AS base

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
RUN chmod +x /usr/local/bin/install-php-extensions && sync && install-php-extensions \
  @composer \
  gd \
  imagick \
  opcache \
  pcntl \
  pdo_pgsql \
  pgsql \
  redis \
  zip \
  sockets \
  bcmath \
  exif

RUN apk update && \
  apk add --no-cache less vim bash nginx supervisor nginx-mod-http-headers-more

ENV PATH="/root/.composer/vendor/bin:${PATH}"

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
ENV OPCACHE_VALIDATE_TIMESTAMPS "0"
COPY docker/php/conf.d/custom.ini $PHP_INI_DIR/conf.d/custom.ini

WORKDIR /app

# By only copying in these files and not generating the autoloader, we can
# cache the downloading of dependencies until there is actually a change.
COPY ./composer.json /app/composer.json
COPY ./composer.lock /app/composer.lock
RUN composer install --no-dev --no-interaction --no-scripts --no-autoloader --no-progress --no-cache

ADD . /app

# Finish the composer install and generate an autoloader now that the full app is copied in
RUN composer install --no-dev --no-interaction --no-progress --optimize-autoloader --no-cache

COPY docker/supervisor/supervisord.conf /etc/supervisord.conf
COPY docker/crontabs/schedule-cron /var/spool/cron/crontabs/root
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/http.d/default.conf /etc/nginx/http.d/default.conf

CMD ["/app/docker/entrypoint.sh"]

##########################################
# STAGE: app-dev
##########################################
FROM base AS app-dev

# Add pcov for test coverage reports.
RUN install-php-extensions pcov

# Install composer dev dependencies
RUN composer install --no-progress

# Make interacting with PHP binaries easier
ENV PATH="./vendor/bin:${PATH}"

#RUN git config --global --add safe.directory /app
