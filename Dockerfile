# Stage 1: Dependencies
FROM node:24-alpine AS deps
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --ignore-scripts

# Stage 2: Builder
FROM node:24-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build SvelteKit static site
RUN npm run build

# Stage 3: Runtime (Caddy to serve static files)
FROM caddy:2-alpine AS runtime
WORKDIR /srv

# Copy built static files
COPY --from=builder /app/build /srv

# Simple Caddyfile for standalone container (optional, prefer main Caddy)
RUN echo ':80 { root * /srv; file_server; try_files {path} /index.html }' > /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]

