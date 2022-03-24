FROM node:17.8.0
WORKDIR /usr/src/clean-architecture-study

COPY ./package.json .

RUN npm install --only=prod

COPY ./dist ./dist

EXPOSE 5050

CMD ["npm", "start"]