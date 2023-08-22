FROM oven/bun:0.7.3
WORKDIR /app
COPY package.json .
COPY bun.lockb .
RUN bun install
COPY . .
EXPOSE 3000
ENTRYPOINT ["bun", "run", "dev"]