# apps/api/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Only copy package files first for better layer caching
COPY package*.json ./

# Install prod deps
RUN npm ci --omit=dev

# Copy the rest of the app
COPY . .

# Make it clear to the platform what we use
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
