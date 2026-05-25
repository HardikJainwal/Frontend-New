# FROM node:20 AS builder

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install --legacy-peer-deps

# COPY . .
# RUN npm run build

# FROM nginx:latest AS runner

# COPY --from=builder /app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# chnaged dockerfile
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Copy the build output - for Vite, this is typically "dist"
COPY --from=build /app/dist /usr/share/nginx/html
# Copy the nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
