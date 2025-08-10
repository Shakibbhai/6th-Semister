# Use an official Node.js runtime as a parent image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Expose the port your service listens on (example: 8081)
EXPOSE 8081

# Start the Node.js service
CMD ["node", "index.js"]