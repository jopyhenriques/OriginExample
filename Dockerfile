FROM    node:latest

MAINTAINER Jopy Henriques (jopy.c.henriques@accenture.com)

# Install app dependencies
RUN npm install

EXPOSE  8080