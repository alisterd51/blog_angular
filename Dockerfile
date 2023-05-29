# Base image for build
FROM node:20-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build:ssr

FROM node:20-alpine AS production

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Copy a "dist" folder for the production build
COPY --from=build /usr/src/app/dist /usr/src/app/dist

RUN npm ci --omit=dev

CMD [ "node", "dist/blog_angular/server/main.js" ]

# expose port
EXPOSE 4000
