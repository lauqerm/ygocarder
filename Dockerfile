# Stage: Production
# Step 1: Build app
FROM node:20.10.0 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
# Leverage caching
RUN npm install --frozen-lockfile
COPY . ./
RUN export VERSION=$(npm run version)
CMD ["npm", "run", "build"]
# Step 2: Setup webserver
# Use a built-in non-root user for security best practices, otherwise you may encounter permission denied errors
FROM nginxinc/nginx-unprivileged AS production
USER nginx
# Copy custom Nginx config, because the app initially hosted on github page, the app assume it will be served in a subfolder, so our nginx is customized to handle this case.
COPY nginx.conf /etc/nginx/nginx.conf
# Copy the static build output from the build stage to nginx's serving directory, again we host the app in a subfolder.
COPY --chown=nginx:nginx --from=builder /app/build /usr/share/nginx/html/ygocarder
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]