# Use an official Node.js runtime as the base image for building the app
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app for production
RUN npm run build


# Use an official Nginx image as the base image for serving the app
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Expose the container's port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
