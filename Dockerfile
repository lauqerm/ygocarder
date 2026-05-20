FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn yarn install --frozen-lockfile

# Stage: Development
FROM builder AS develop
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]

# Stage: Production build
FROM builder AS production-build
COPY . .
RUN yarn run build
RUN yarn install --production --frozen-lockfile --ignore-scripts --prefer-offline

# Stage: serve production
# Use a built-in non-root user for security best practices, otherwise you may encounter permission denied errors
FROM nginxinc/nginx-unprivileged:alpine-slim AS production
USER nginx
# Copy custom Nginx config, because the app initially hosted on github page, the app assume it will be served in a subfolder, so our nginx is customized to handle this case.
COPY nginx.conf /etc/nginx/nginx.conf
# Copy the static build output from the build stage to nginx's serving directory, again we host the app in a subfolder.
COPY --chown=nginx:nginx --from=production-build /app/dist /usr/share/nginx/html/ygocarder
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
