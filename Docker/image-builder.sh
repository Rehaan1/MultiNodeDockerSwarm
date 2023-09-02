#!/bin/bash

# Build Docker image for addr service
docker build -t rehaanmazid/addr-service ../addr

# Build Docker image for Nginx
docker build -t rehaanmazid/nginx ../nginx