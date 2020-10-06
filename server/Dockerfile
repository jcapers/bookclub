FROM node:lts

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package*.json /app/server/

RUN npm install && npm install -g nodemon

COPY . /app/server/

CMD ["nodemon", "run", "server"]