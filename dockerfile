FROM node:14-alpine

CMD [ "mkdir","-p","/dist" ]
COPY . dist/
WORKDIR /dist

ENTRYPOINT [ "npm","start" ]
EXPOSE 3000