FROM ubuntu:14.04

MAINTAINER stephan lindauer <stephanlindauer@posteo.de>

RUN apt-get --assume-yes update
RUN apt-get --assume-yes upgrade

RUN apt-get install -y nodejs npm git git-core

ADD . /gramobot/

RUN find .

RUN chmod +x ./gramobot/install.sh

CMD ./gramobot/install.sh