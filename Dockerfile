# Install dependencies 
FROM node:16-alpine3.15 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/bffTemplateMysql
COPY package*.json ./
RUN npm ci

# Build the app with cache dependencies
FROM node:16-alpine3.15 AS builder
WORKDIR /usr/src/bffTemplateMysql
COPY --from=deps /usr/src/bffTemplateMysql/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM node:16-alpine3.15 AS runner

# Set working directory
WORKDIR /usr/src/bffTemplateMysql

COPY  package*.json ./

RUN npm install 

COPY --from=builder /usr/src/bffTemplateMysql/dist ./dist

EXPOSE 4000

CMD [ "node","dist/main" ]
