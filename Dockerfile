FROM node:18

WORKDIR /juegos-mentales

COPY . .

RUN npm link

CMD ["node", "bin/brain-games"]