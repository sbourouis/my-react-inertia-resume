#!/usr/bin/env bash

export COMPOSER_ALLOW_SUPERUSER=1
composer install > /dev/null 2>&1
php artisan $@ --no-ansi
