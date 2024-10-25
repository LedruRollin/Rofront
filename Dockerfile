FROM node:18.18.0-slim

# install app dependencies
COPY package.json rofront/package.json
COPY package-lock.json rofront/package-lock.json

WORKDIR /rofront

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
