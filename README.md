# Book Club Social App
Book Club App built using MERN Stack.

## Current Features
- User Registration, login, auth with jwtokens, passwords hashed
- Bookshelves create, delete
- Add/delete books from shelves

Deployable with Docker on a cloud instance. Currently does not work with kubernetes - ongoing.

## Deploy containers
`docker-compose up --build -d`

## References
Some aspects of this project was not possible without some tutorials.

**Containerising a MERN app with docker-compose**

[1] J. Cuneo, MERN + Docker Starter, Github, Aug 21, 2018. [Online]. Available: https://github.com/joshdcuneo/mern-docker-starter

**User Login, Registration, Backend Validation, Hash Passwords with bcrypt, and jwttoken Auth

[2] R. Prasad, Build a Login/Auth App with the MERN Stack, Bits and Pieces, Nov 22, 2018. [Online]. Available: https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669
