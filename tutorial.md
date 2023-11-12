### Tutorial

## Setup the project

create directory <simple-rest>

init for npm 
```bash
  npm init
```

install package
```bash
  npm install express dotenv cors
```

- express for web server
- dotenv to set environment variable in your machine using .env file
- cors to handle cross origin resource sharing

install dev package
```bash
  npm install --save-dev typescript ts-node nodemon @types/express @types/cors
```
- typescript to enable typescript in your project
- ts-node to run directly typescript code without transpile it to js
- nodemon to watching every changes in your project and automatically reload web server
- @types/express express in typescript
- @types/cors cors in typescript
- --save to install package only in dev dependencies
  
add git ignore
```bash
  touch .gitignore
```
or you can simply create file named `.gitignore`

build web server