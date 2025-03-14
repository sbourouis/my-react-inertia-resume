#!/usr/bin/env bash

APP_ROLE="${APP_ROLE:-app}"

# Fix up file permissions from build
chown -R www-data:www-data \
  /app/storage \
  /app/bootstrap/cache
chmod -R 777 /app/storage
mkdir -p /.config && chmod 777 /.config

# Create supervisord's configuration folder
mkdir -p /etc/supervisor.d

# Enable supervisor's tasks depending on the app role
if [[ "${APP_ROLE}" == *app* ]]; then
  ln -sf /app/docker/supervisor/app.ini /etc/supervisor.d/app.ini
fi

if [[ "${APP_ROLE}" == *worker* ]]; then
  ln -sf /app/docker/supervisor/worker.ini /etc/supervisor.d/worker.ini
fi

if [[ "${APP_ROLE}" == *scheduler* ]]; then
  ln -sf /app/docker/supervisor/scheduler.ini /etc/supervisor.d/scheduler.ini
fi

# Start supervisord
exec supervisord -n -c /etc/supervisord.conf
