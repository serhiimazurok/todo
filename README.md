# Simple todo app

## Create `.env` file in the root:

```dotenv
PORT=3000

POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=qwerty
POSTGRES_DATABASE=demo

JWT_SECRET=superSecret
JWT_EXPIRES_IN=2h
```

## Install node modules

```bash
npm i
```

## Start all dependencies

```bash
npm run services:up
```

## Run migrations and create seed data

```bash
npm run migrate:up
npm run seed:run
```

## Start the server

```bash
npm start
```