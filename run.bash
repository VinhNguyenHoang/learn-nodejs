#!/bin/bash

source .env

echo "Running docker app for $APP_IMG_NAME"

docker run -p 1234:$PORT -d --env-file .env $APP_IMG_NAME:$TAG_VER