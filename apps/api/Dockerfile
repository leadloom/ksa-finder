FROM node:18-alpine

WORKDIR /app

# copy only package files first to leverage Docker layer cache
COPY package*.json ./

# install prod deps (no lockfile required)
RUN npm install --omit=dev

# now copy the rest
COPY . .

ENV NODE_ENV=production
EXPOSE 8080

CMD ["npm", "start"]
