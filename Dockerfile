FROM node:8-alpine

RUN mkdir -p /app && mkdir -p /app/public

COPY package.json /app/package.json
COPY mini-webserver.js /app/mini-webserver.js
COPY index.html /app/public/
COPY check.js /app/public/

RUN cd /app && npm install

VOLUME ["/app/public"]

EXPOSE 3000

CMD ["node", "/app/mini-webserver.js"]
