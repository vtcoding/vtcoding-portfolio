# Stage 1: build
FROM node:20-alpine AS build

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy all source code
COPY . .

# Build Vite app
RUN pnpm run build

# Stage 2: serve with nginx
FROM nginx:stable-alpine

# Copy Vite build (dist folder)
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx/conf.d/portfolio.conf /etc/nginx/conf.d/default.conf

# Expose container port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
