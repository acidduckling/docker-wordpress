FROM node:10-alpine
LABEL maintainer=acidduckling

WORKDIR /usr/src/app

# Only copy the package.json and package-lock.json, and run npm install - this creates a cached image layer for improved performance on repeat builds
COPY package*.json ./
RUN npm install

# Copy the application source code to the image
COPY . .

EXPOSE 8080

CMD ["npm", "start"]
