FROM ubuntu:18.04

ENV TZ=Asia/Dubai

ENV NODE_VERSION 8.11.4
ENV NVM_DIR /root/.nvm
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH

# Use bash instead of sh
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y build-essential curl graphicsmagick libssl-dev \
    git perl libjson-xs-perl libxml2-dev libxml-xpath-perl libdatetime-perl \
    libdatetime-timezone-perl libdatetime-locale-perl libparse-recdescent-perl \
    yui-compressor inkscape libpcre3-dev libtool automake python-docutils libpq-dev libpng-dev

WORKDIR /root/app
COPY package*.json ./

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash && \
    source $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    npm i

COPY . .

EXPOSE 8779

# CMD ["/bin/ls", "-al", "../.nvm"]

CMD source $NVM_DIR/nvm.sh && npm run start

