FROM node:slim
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
ENTRYPOINT [ "npm","run","preview" ]