FROM node:20-alpine as build
WORKDIR /app
COPY package.json ./
RUN corepack enable & yarn install
COPY . ./
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
