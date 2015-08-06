FROM ubuntu:14.04

MAINTAINER stephan lindauer <stephanlindauer@posteo.de>

RUN apt-get --assume-yes update
RUN apt-get --assume-yes upgrade

RUN apt-get install -y nodejs npm git git-core
RUN apt-get install nodejs-legacy
RUN echo 'export PATH=$PATH:/usr/local/bin' >> $HOME/.bashrc

RUN find .

RUN npm install -g brunch
RUN npm install -g bower

ADD . /gramobot/

RUN find .

RUN chmod +x ./gramobot/install.sh

CMD ./gramobot/install.sh