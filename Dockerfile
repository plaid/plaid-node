FROM node:15

# Create app directory
WORKDIR /usr/src/app

# Copy app to directory
COPY . /usr/src/app

RUN npm install

CMD ["make", "test"]


