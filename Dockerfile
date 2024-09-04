FROM 245200388354.dkr.ecr.us-east-1.amazonaws.com/docker-hub/library/node:15

# Create app directory
WORKDIR /usr/src/app

# Copy app to directory
COPY . /usr/src/app

RUN npm install

CMD ["make", "test"]
