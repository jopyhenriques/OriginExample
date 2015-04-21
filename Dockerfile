FROM    node:latest

MAINTAINER Jopy Henriques (jopy.c.henriques@accenture.com)

# add the files to load

ADD ./ .

# install all needed packages


RUN npm install

# expose port

EXPOSE 8080

# execute server.js

ENTRYPOINT ["node", "server.js"]
