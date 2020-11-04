This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies and then run the development server:

```bash

# install
yarn

# run
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.

## Starting Database

```bash
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres
```

## Creating Database

notice: It's very important to add `;` at the end of your sql sentence or it won't work.

```bash
docker exec -it <id> bash
psql -U blog
CREATE DATABASE development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```

## Connecting Database

you can change `ormconfig.json` to connect your database well.

## Creating Tables

notice: define table name in camel case because typeorm will create foreign key with camel case.

```bash
yarn run migration:run
```

## Creating Data

```bash
yarn run seed:db
```
