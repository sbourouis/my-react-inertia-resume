#!/usr/bin/env sh

su -c 'npm install' node
exec su -c 'npm run dev' node
