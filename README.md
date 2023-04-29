# Assesment-back
This is a RESTful API where you can create an user for make a list of favs, you can get, create, update and delete it. Created using Node.js, Prisma, postgreSQL and Express

# Usage
- `npm install` - For install all dependencies
- `npm run prisma:seed` - For seeders run (Items avaible for the lists)
- `npm run dev` - For server's run

- *For create an user: A non-empty email must be provide, password must contain at least: an uppercase, a lowercase, a number and a special character*
- *For create a list of favs you must provide in the headers the authorization token and a name and the body must have an array of the ids of the items that the list will be contain*
- *For update a list you must provide in the headers the authorization token,the body must have the id of the list that will be updated, and an array of the new ids*
- *For get all the lists of the user, you must provide in the headers the authorization token, the body must contain the user id*
- *For get a specific list of the user,you must provide in the headers the authorization token, the body must contain the user id and the list id*
- *For delete a list of the user,you must provide in the headers the authorization token, the body must contain the list id*

# External dependencies

- `bcrypt` - For password encryption
- `jsonwebtoken` - For authorization token
- `Faker` - For seeder of items
