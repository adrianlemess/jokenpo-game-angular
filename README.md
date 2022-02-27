# Jokenpo

This is a home task project to create a Jokenpo game in Angular.

- [Jokenpo](#jokenpo)
  - [Deploy status](#deploy-status)
  - [Board with tasks](#board-with-tasks)
  - [URL deployed](#url-deployed)
  - [Resources used](#resources-used)
  - [Requirements to run](#requirements-to-run)
  - [How to install dependencies](#how-to-install-dependencies)
  - [Scripts](#scripts)
    - [npm start - run development mode](#npm-start---run-development-mode)
    - [npm run build - build project](#npm-run-build---build-project)
    - [npm test - run unit tests](#npm-test---run-unit-tests)
    - [npm run test:watch - run unit tests in watch mode](#npm-run-testwatch---run-unit-tests-in-watch-mode)
    - [npm run test:e2e - run e2e tests](#npm-run-teste2e---run-e2e-tests)
    - [npm run prettier:check - run prettier](#npm-run-prettiercheck---run-prettier)
    - [npm run prettier:apply - apply prettier in all your files](#npm-run-prettierapply---apply-prettier-in-all-your-files)
    - [npm run lint - run lint in the project](#npm-run-lint---run-lint-in-the-project)
    - [npm run lint:fix - run and apply lint in the project](#npm-run-lintfix---run-and-apply-lint-in-the-project)
    - [npm run compodoc:build - to build compodoc](#npm-run-compodocbuild---to-build-compodoc)
    - [npm run compodoc:build-and-serve - build and serve compodoc](#npm-run-compodocbuild-and-serve---build-and-serve-compodoc)
    - [npm run compodoc:serve - run server with compodoc](#npm-run-compodocserve---run-server-with-compodoc)
    - [npm run cypress:open - run cypress with browser](#npm-run-cypressopen---run-cypress-with-browser)
    - [npm run cypress:run - run cypress in headless mode](#npm-run-cypressrun---run-cypress-in-headless-mode)
  - [Husky](#husky)
  - [Tests](#tests)
  - [Business layer](#business-layer)
  - [Considerations](#considerations)
  - [Possible improvements](#possible-improvements)
  - [Deploy](#deploy)
    - [Deploy requirements](#deploy-requirements)
    - [Docker](#docker)
    - [Using Github Actions and Deploying into Netlify](#using-github-actions-and-deploying-into-netlify)
  - [Author](#author)
  - [License](#license)

## Deploy status

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ebd19f0-c150-4bb2-9dd1-e32ffcc8d5e7/deploy-status)](https://app.netlify.com/sites/jokenpo-game-adrian/deploys)
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
### npm start - run development mode

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
### npm run build - build project

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### npm test - run unit tests

Run `ng test` to execute the test suite with [Jest](http://jestjs.io)

### npm run test:watch - run unit tests in watch mode

Run `npm test` and execute tests with --watch flag mode

### npm run test:e2e - run e2e tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### npm run prettier:check - run prettier

Will run the prettier in the project with the flag --check. This will let us know if we have files that have not been formatted.

### npm run prettier:apply - apply prettier in all your files

If you forgot to apply prettier in some of your files, you can simple run this command

### npm run lint - run lint in the project

This command is to run eslint using the `.eslintrc.json` file rules

### npm run lint:fix - run and apply lint in the project

This command is to run eslint using the `.eslintrc.json` file rules and fix any error found

### npm run compodoc:build - to build compodoc

Build compodoc and generate the documentation

### npm run compodoc:build-and-serve - build and serve compodoc

It will generate the document and serve in the port `8080`.

### npm run compodoc:serve - run server with compodoc

If you already have compodoc files generated you can simple run the serve with this command, it will run on port `8080`

### npm run cypress:open - run cypress with browser

It will open the Cypress devtools and run the tests.

### npm run cypress:run - run cypress in headless mode

Useful to run on CI.
## Husky

I've added Husky to enable some hooks to run before commit and pushing code. I've added the following git hooks:

* pre-commit: In pre-commit I decide to run fast checkers: `npm run prettier:check` and `npm run lint`
* pre-push: In pre-push I decide to run all quality suite: `npm run prettier:check`, `npm run lint`, `npm run test` and `npm run build`
* commit-msg: use commit lint to enforce angular conventional and good commit messages

## Tests

## Business layer

I've started the application by thinking about the model and how I would model the application. For doing this I've decided to use two design patterns: `Strategy` and `Factory`. 

The following diagram was my initial idea:

![Architecture diagram](/docs-image/diagram.png)

Some enums are not connected because they will be used across my component and views.

I have two factories:

* JokenpoStrategyFactory - responsible to return a strategy that match with the type passed.
* HandFactory - has two method to return the hand with the correspondent strategy. 
  * create: we pass the option type and return the correspondent hand
  * createForComputer: it's a method to return with a random logic, a hand with strategy.
* As the logic to know which hand win of each hand (example: Rock x Paper), it's the logic we'd probably change in the future if we need to add a new hand, I isolated as a strategy, this way if we need to add a new hand we will not update the previous one, only the strategy layer. 

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