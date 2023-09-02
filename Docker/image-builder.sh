#!/bin/bash

# Build Docker image for addr service
docker build -t rehaanmazid009/addr-service ../addr

# Build Docker image for Nginx
docker build -t rehaanmazid009/addr-nginx ../nginx