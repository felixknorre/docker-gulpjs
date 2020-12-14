FROM  ubuntu:latest
LABEL maintainer="felix-knorre@hotmail.de"

# install gulp command line
RUN apt upgrade 
RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y
RUN npm install --global gulp-cli

#WORKDIR /var/www/html/
RUN mkdir gulp


# copy required files into image 
COPY gulp/package.json /gulp/
COPY gulp/package-lock.json /gulp/
COPY gulp/gulpfile.js /gulp/
COPY gulp/runGulp.sh .
COPY gulp/setupAndRunGulp.sh .
RUN chmod 777 runGulp.sh
RUN chmod 777 setupAndRunGulp.sh