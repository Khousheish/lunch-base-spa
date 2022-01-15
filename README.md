# LunchBaseSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

# Pre-installation

Use Node.js LTS, you can use NVM to manage Node versions on your local

## Dependencies

Make sure you have `node`, `npm` and `angular/cli` installed in your machine.

### Install node and npm

Must have `node` and `npm` installed, other wise its better to install them using [nvm](#Install-NPM-via-NVM).

### Install Angular/cli

To install `angular/cli` run

```shell
  npm install -g @angular/cli@{{version}}
```

For LunchBaseSpa we are using version `~13.1.3`, run

```shell
  npm install -g @angular/cli@~13.1.3
```

# Installation

## Copy environment files

```shell
  cp src/environments/environment.dist.ts src/environments/environment.ts
```

## Build the environment

```shell
  npm install
  ng build
```

# Install NPM via NVM

## Installing nvm

1- Clone repository

```shell
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

2- Add this to your profile (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)

```text
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

3- Restart your machine or run

```shell
  source {{profile}}
```

profile: (`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)

Source [Node Version Manager Installation](https://github.com/nvm-sh/nvm)

## Installing npm

1- To get list of available versions run

```shell
  nvm ls-remote
```

2- Select version from the list and install it run, (Better to install latest LTS version)

```shell
  nvm install {{selected-version}}
```

Source [Installing Angular CLI](https://angular.io/cli#installing-angular-cli)

## Project Structure

The project is divided into 2 main directories: modules and shared.

- Modules directory includes all the lazy loaded modules. Each of which is a standalone entity, that only depends on the shared entities in the shared directory.

  Each module has the following folders:

  - Components: includes implementations of sections to be added to main pages.
  - Containers: includes the full pages that the router redirects to.
  - Shared: includes the shared services, interfaces, constants, etc. needed by only its own module to load its pages.
  - Store: includes all the state logic, including actions, effects, reducers, selectors, etc.

- Shared directory includes the dependencies that all other modules need, mainly general UI components, constants, interfaces, .etc.
They exist in the shared to keep the code DRY.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
