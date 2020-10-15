# Build app
FROM node:lts-alpine as build

RUN mkdir -p /app/client
WORKDIR /app/client

COPY package*.json /app/client/

# Install dependencies first
RUN npm install && npm install react-scripts -g

COPY . /app/client/

CMD ["npm", "start"]
# RUN npm run build