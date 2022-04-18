Pre install
[node](https://nodejs.org/en/download/)

Install dependency
`yarn install`

Run project
`yarn start:dev`

Run test
`yarn test:e2e`

Create new .env file 
```
DATABASE_URL="postgresql://postgres:123@localhost:5432/nest?schema=public"
JWT_SECRET='super-secret;
```
Create  .env.test file for test 
```
DATABASE_URL="postgresql://postgres:123@localhost:5435/nest?schema=public"
JWT_SECRET='super-secret;
```

Run databse with docker
`yarn db:dev:restart`
