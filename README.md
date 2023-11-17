### Tutorial
# Unit Testing and Code Coverage

## Apa itu testing di Backend
Seperti artinya testing berarti pengujian, backend testing merupakan metode untuk mengecek aplikasi backend atau database telah berjalan sesuai dengan semestinya.

secara umum ada 3 jenis test yang dapat dilakukan pada backend
- Structural Testing
- Functional Testing
- Non-Functional Testing

### Structural testing
Testing untuk memastikan seluruh element pada database data bekerja dengan baik untuk meyimpan data. Dalam melakukan structural testing ini kita dapat mengecek mulai dari schema database, table, column, trigger, view dst yang termasuk element dalam database dan memastikan seluruhnya telah sesuai.

### Functional Testing
Functional testing melakukan pengujian pada fungsional applikasi backend apakah sudah bekerja dengan semestinya atau belum. Testing dapat mencakup backend app dalam menerima request dan memprosesnya sampai memberikan response pada client, seluruh element yg berperan dalam flow ini perlu untuk dilakukan testing.

### Non-Functional Testing
Testing ini menguji stress dan load yang dapat di handle backend application, dengan melakukan test ini dapat memastikan performa dari backend aplikaction.

Namun kali ini kita akan berfokus pada functional testing pada backend application kita. Dalam functional testing sendiri masih ada istilah lain seperti Unit Testing dan Code Coverage

### Unit Testing
Seperti bahasnya dalam testing ini kita perlu menguji setiap unit yang ada di backend applikcation kita. Mulai dari function, class, serta integrasinya.

### Code Coverage
Code coverage ini mengukur setiap function atau seluruh utiliy yang sudah kita buat dalam project itu telah digunakan dalam testingnya, dengan melakukan code coverage ini kita dapat mengetahu fucntion apa saja atau baris code apa saja yang belum berjalan pada testing. Biasanya dalam tim code covearge harus memperoleh persentasi diatas 80%.


https://testsigma.com/blog/backend-testing/
https://www.geeksforgeeks.org/what-is-backend-testing/

## Setup the project

### Init for npm 
```bash
  npm init
```

### Install package
```bash
  npm install express dotenv cors
```

- express for web server
- dotenv to set environment variable in your machine using .env file
- cors to handle cross origin resource sharing

### Install dev package
```bash
  npm install --save-dev typescript ts-node nodemon @types/express @types/cors
```
- typescript to enable typescript in your project
- ts-node to run directly typescript code without transpile it to js
- nodemon to watching every changes in your project and automatically reload web server
- @types/express express in typescript
- @types/cors cors in typescript
- --save to install package only in dev dependencies
  
### Add miscellaneous files
-  `.gitignore` - To set all ignore files or directories in git
-  `jest.config.ts` - Config for jest to run unit tests
-  `tsconfig.json` - Typescript config
-  `.env` - To set all environment variable

### Build web server