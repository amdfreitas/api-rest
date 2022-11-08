FROM amd64/node

CMD [ "mkdir","-p","/dist" ]
COPY . dist/
WORKDIR /dist
RUN "npm audit fix"
RUN "npm install"
ENTRYPOINT [ "npm","start" ]
EXPOSE 3000