# star-wars-movie-finder

## Description
Star wars finder is a Vue project developed by me to help people that love star wars find details about the episodes and their characters.

### Project setup
To install the project on your PC, you'd need to have the following installed:
* Node (and NPM/Yarn) - v12

*If you have `nvm` installed, run `nvm use` to set Node version to `v12.6.0`*
Setting up the project can be accomplished by following the steps listed below
* Make a copy of the `.env.sample` file found in the root of the project and name the file `.env`, this file contains environment variables required to get this project running. Ensure to fill the keys with the appropriate values.

**NB:** RadiAPI was used to connect this app to SWAPI. Visit [https://docs.rapidapi.com/](https://docs.rapidapi.com/) to set it up before starting the project.

* Install the project dependencies with the command
```sh
yarn install
```

* Run and serve the build for development environment with the command:
```sh
yarn build:dev && yarn serve
```

### Deploying to Production
Deploying to production is as simple as running the build command
```sh
yarn build
```
and serving the build with the command
```sh
yarn serve
```

### Run your unit tests
Component unit tests are written with Jest

- Run `yarn test:unit` to all tests or  ``yarn test:unit:watch` to run tests in watch maode.

### Lints and fixes files
This project uses the Airbnb style guide and linting is setup with Eslint.

- Run `yarn lint` to lint files
