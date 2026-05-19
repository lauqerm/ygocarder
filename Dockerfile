FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./

# Stage: Development
FROM builder AS develop
RUN --mount=type=cache,target=/root/.npm npm install
COPY . .
RUN export VERSION=$(npm run version)
EXPOSE 3000
CMD ["npm", "start"]

# Stage: Production build
FROM builder AS production-build
RUN npm install --frozen-lockfile
COPY . .
RUN export VERSION=$(npm run version)
RUN npm run build
RUN npm prune --production

# Stage: serve production
# Use a built-in non-root user for security best practices, otherwise you may encounter permission denied errors
FROM nginxinc/nginx-unprivileged AS production
USER nginx
# Copy custom Nginx config, because the app initially hosted on github page, the app assume it will be served in a subfolder, so our nginx is customized to handle this case.
COPY nginx.conf /etc/nginx/nginx.conf
# Copy the static build output from the build stage to nginx's serving directory, again we host the app in a subfolder.
COPY --chown=nginx:nginx --from=production-build /app/build /usr/share/nginx/html/ygocarder
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
