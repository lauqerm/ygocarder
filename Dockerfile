# Development
FROM node:20.10.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS="--openssl-legacy-provider"
RUN export VERSION=$(npm run version)
EXPOSE 3000
CMD ["npm", "start"]
# ENV NODE_ENV production