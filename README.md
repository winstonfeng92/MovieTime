# MovieTime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

curl -X PATCH \
  'https://nest-movie-backend.onrender.com/auth/userupdate' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjcyNDBiOWRjNDZhZGZhOWMzYTEwNCIsInVzZXJuYW1lIjoid2luc3RvbiIsImVtYWlsIjoid2luc3RvbkBnbWFpbC5jb20iLCJ0bWRiX2tleSI6InF3ZXJ0YXNkZmhqa2x6eGN2IiwiaWF0IjoxNjg0OTc1ODQwLCJleHAiOjE2ODQ5Nzc2NDB9.gYs31NJTeBcmBoz6EK55pwrQBWWumtppknBaQMlMzGE' \
  -d '{
    "email": "winston@gmail.com",
    "role": "USER"
  }'