#!/usr/bin/env sh

# Create a user within the container with the required USER_UID
# Note: Not really required for NodeJS but it makes the container look nicer when you exec into it.
adduser -u ${USER_UID} developer -D || true

exec /bin/sleep infinity
