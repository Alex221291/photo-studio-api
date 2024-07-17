FROM node:20.15.0-alpine as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM node:20.15.0-alpine
ARG PORT=5000 

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE ${PORT}

CMD ["npm", "run", "start:prod"]

