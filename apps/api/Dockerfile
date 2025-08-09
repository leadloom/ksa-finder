# apps/api/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy only package manifests first (better caching)
COPY package*.json ./

# Install deps (ci requires a lockfile; use install instead)
RUN npm install --omit=dev

# Now copy the rest of the app
COPY . .

# Railway expects the server to listen on this port
ENV PORT=8080
EXPOSE 8080

# Start your API (uses "start": "node server.js" from package.json)
CMD ["npm", "start"]
