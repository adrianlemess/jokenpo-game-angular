# Jokenpo

This is a home task project to create a Jokenpo game in Angular.

- [Jokenpo](#jokenpo)
  - [Board with tasks](#board-with-tasks)
  - [URL deployed](#url-deployed)
  - [Resources used](#resources-used)
  - [Requirements to run](#requirements-to-run)
  - [How to install dependencies](#how-to-install-dependencies)
  - [Scripts](#scripts)
    - [npm start - development mode](#npm-start---development-mode)
    - [npm run build - Build project](#npm-run-build---build-project)
    - [npm test - running unit tests](#npm-test---running-unit-tests)
    - [npm run test:ci Running e2e tests](#npm-run-testci-running-e2e-tests)
  - [Considerations](#considerations)
  - [Possible improvements](#possible-improvements)
  - [Deploy](#deploy)
    - [Deploy requirements](#deploy-requirements)
    - [Docker](#docker)
    - [Using Github Actions and Deploying into Netlify](#using-github-actions-and-deploying-into-netlify)
  - [Author](#author)
  - [License](#license)

## Board with tasks

If you would like to check how I organize my tasks, you can check my board on Trello [here](https://trello.com/b/wX98RPXL/anaconda-home-task)

## URL deployed

If you want to test the application deployed you can check [here]()
## Resources used

* [Angular](http://angular.io) - Framework used. Version 13 choose, is the last one until the moment.
* [Node](https://nodejs.org/) - Need to run the project.
* [NPM](https://www.npmjs.com) - Manage dependencies.
* [Jest](http://jestjs.io) - Framework used for testing purpose, need for specs, spies, stubs, assertions and also supply the test runner to run the specs.
* [Testing Library](http://testing-library.com) - Cross-platform library to help with a set of utilities to be able to make integration tests easily.
*  [Material IO](https://material.angular.io) - Style library with Angular components based on Material UI
*  [Docker](https://www.docker.com) - To create containers and help to ship the project to run in an environment with support (like k8s)
*  [Netlify](https://www.netlify.com) - Netlify unites an entire ecosystem of modern tools and services into a single, simple workflow for building high performance sites and apps.

## Requirements to run

* NodeJS LTS version v16.13.1
* VSCode
* GIT
* Angular/CLI version 13.2.5
## How to install dependencies

Install dependencies with:

```
npm ci
```

If you want to update the package-lock.json with the possible latest versions, run:

```
npm install
```

## Scripts
### npm start - development mode

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
### npm run build - Build project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### npm test - running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### npm run test:ci Running e2e tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Considerations

* Moved Karma/Jasmine to Jest and Testing library, to have quick tests running and also to focus on integration tests with Testing library

## Possible improvements
## Deploy

To make the code shippable to production, I've setup two ways, the first one with Dockerfile and the second one with CI and Netlify.

### Deploy requirements

- Netlify account
- Docker installed
- Github account
- Git


### Docker

In the project directory, to build the application with Docker multistage you can build the image:

```docker build -t username/jokenpo .```

And then run your image:
```docker run --rm -it -p 3000:80 username/jokenpo```

After that, you can access the application with this URL in your browser:

```http://localhost:3000```


### Using Github Actions and Deploying into Netlify

## Author

  **Adrian Lemes Caetano** -  [GitHub](https://github.com/adrianlemess)

<a href="https://adrianlemess.github.io">
  <img 
  alt="Author picture - Adrian LEmes" src="https://avatars1.githubusercontent.com/u/12432777?s=400&u=927d77dcc0b02c1ac69360f2194336a2517e6f08&v=4" width="100">
</a>

## License

This project is under [MIT license](LICENSE.md).