FROM node:8-alpine

WORKDIR /usr/src/app
COPY . .
RUN apk add --update build-base git python bash && \
  rm -rf /tmp/* /var/cache/apk/* && \
  npm install && \
  npm link

CMD [ "npm", "run", "start" ]