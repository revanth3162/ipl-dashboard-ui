# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app


# install app dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --global
RUN npm install sass --force

# add app
COPY . .

# start app
CMD ["npm", "start"]