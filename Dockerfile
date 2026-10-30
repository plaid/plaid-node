# Note: This image is also built in CircleCI, so limit references to internal repositories.
FROM node:24.22.1

# Create app directory
WORKDIR /usr/src/app

# Copy app to directory
COPY . /usr/src/app

RUN npm ci

CMD ["make", "test"]
