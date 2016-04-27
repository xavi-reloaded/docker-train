FROM node:4
MAINTAINER Xavi Hidalgo <xavi.hidalgo@apiumtech.com>

WORKDIR /app
ADD . /app

RUN npm install
RUN npm test

CMD /app/scripts/utils/app-runner.sh
