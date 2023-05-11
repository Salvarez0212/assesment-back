# Assesment-back
This is a RESTful API where you can create an user for make a list of favs, you can get, create, update and delete it. Created using Node.js, Prisma, postgreSQL and Express

# Usage
- `npm install` - For install all dependencies
- `npm run prisma:seed` - For seeders run (Items avaible for the lists)
- `npm run dev` - For server's run

The following are the variables that you need to run de API
```
DATABASE_URL // The database url 
PORT // The port whre you want to run the API
SECRET_JWT // The secret phrase to encode the token 
```

# Endpoints 
- To create a user, use a POST request in:
```
http://localhost:8080/auth/local/signup
```
In the body you must provide:
```
{
  "email": "test@test.com",
  "password": "Password1!"
}
```
For the user security, the password must contain at least: an uppercase, a lowercase, a number and a special character.
If the user was created successfully, the response will be:
```
{
  "message": "User created successfully",
  "data": {
    "id": id,
    "email": "test@gmail.com",
    "password": enctypted password,
    }
}
```

- To login a user, use a POST request in:
```
http://localhost:8080/auth/local/login
```
In the body you must provide:
```
{
  "email": "test@test.com",
  "password": "Password1!"
}
```
If the login was successfully the response will be:
```
{
    "message": "User Logged in",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2ODM4MTY5NTh9.e0_nqOLHxrmu5qGlu-4BpdzwQijxJvAuwS2EKfza8vg"
    }
}
```

- To get all the lists for a user, use a GET request in:
```
http://localhost:8000/api/favs
```
You must provide an Authorization header with the user's token as follows:
```
Authorization: bearer ACCESS_TOKEN
```
In the body of the request must be the user's id:

```
{
  userId: user's Id
}
```
If the request was successfully, the response will be:
```
{
    "message": "Lists found",
    "data": [ ... ] // Array with all lists associeted with the user an its items
}
```
- To get a specific list of a user, use a GET request in:

```
http://localhost:8000/api/favs/:id
```

You will need to provide the list id in the params, additionally you nedd to provide the Authorization header shown above. The body must be empty.

If the list is found, the response will be:
```
{
    "message": "List found",
    "data": {
        "id": list_id,
        "name": list_name,
        "userId": user_id,
        "favs": [...] // An array with all the items that belongs to the list
    }
}
```

- To create a list of favs, use a POST request in:
```
http://localhost:8000/api/favs
```

You will need to provide, in the body:
```
{
  "name": "New list",
  "favs": [...] // Array with the item id,
  "userId": user_id
}
```
Additionally you nedd to provide the Authorization header shown above.

If the creation was successfully, the response will be:
```
{
    "message": "List created successfully",
    "data": {
        "id": list_id,
        "name": "New list",
        "userId": user_id
}
```

- To update a list, use a PUT request in:
```
http://localhost:8000/api/favs
```

You will need to provide, in the body:
```
{ 
  "id": list_id,
  "favs": [...] // Array with the new items id,
  
}
```
Additionally you nedd to provide the Authorization header shown above.

If the update was successfully, the response will be:
```
{
    "message": "The list was updated",
    "data": {
        "id": "clhjr3hvf0002uj1cppaeoxkz",
        "name": "New list",
        "userId": "clhgm4kpx0000ujl0y1bmpx31"
    }
}
    
```

- To delete a list, use a DELETE request in:

```
http://localhost:8000/api/favs
```

You will need to provide, in the body:
```
{ 
  "id": list_id, 
}
```
Additionally you nedd to provide the Authorization header shown above.

If the delete was successful, the response will be:
```
{
    "message": "Fav list deleted",
    "data": {
        "id": list_id,
        "name": "New list",
        "userId": user_id
    }
}
```


# External dependencies

- `bcrypt` - For password encryption
- `jsonwebtoken` - For authorization token
- `Faker` - For seeder of items
