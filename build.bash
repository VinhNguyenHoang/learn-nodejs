#!/bin/bash

source .env

echo "starting build for $APP_IMG_NAME using tag $TAG_VER"

docker build . -t $APP_IMG_NAME:$TAG_VER