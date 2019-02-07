# mini-webserver
Provides a minimal webserver (via Express.js) to expose static files from the Docker host via HTTP. This image is build on Alpine Linux (base image `mhart/alpine-node:0.10.40`) and aims for a minimal size.

## Usage
You can expose a local directory which you want to have served via the `mini-webserver` by starting it with

`docker run --name mini-web -p 8080:3000 -v /path/to/local/folder:/app/public:ro -d agileit/mini-webserver`

In this example, the port on the docker host where the `mini-webserver` is reachable is `8080`.
