# Build app
FROM node:lts-alpine as build

RUN mkdir -p /app/client
WORKDIR /app/client

COPY package*.json /app/client/

# Install dependencies first
RUN npm install && npm install react-scripts@3.0.0 -g

COPY . /app/client/

CMD ["npm", "start"]
# RUN npm run build
# # Start and nginx container
# FROM nginx

# # Set our custom nginx.conf in the container
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# # Copy the react build from the build container
# COPY --from=build /app/client/build /usr/share/nginx/html

# # Set permissions so nginx can serve it
# RUN chown nginx.nginx /usr/share/nginx/html/ -R

# EXPOSE 80