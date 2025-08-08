# Use Node.js 18 as base image
FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies (only package files first to leverage Docker cache)
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# App port (Railway will respect PORT env var too)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

