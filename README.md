# Getting Started

Mrketing Web FE

Table of Contents:

1. [Pre Run Requirements](#pre-run-requirements)

2. [Run Local Development](#run-local-development)

3. [Deploying the app](#deploying-the-app)

4. [Color Palettes](#color-palettes)

**`NOTE`**: When there is a change please see this files first and if necessary **DON'T FORGET** to update.

## Pre Run Requirements

_please install these in your local machine before running the code_

- Node Version: **`v16.19.1`**

  _for easier switching between node js versions install using **`NVM`** and run **`nvm use 16`** command_

- [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm)

  _used for switching between various node.js versions_

- [Docker desktop](https://www.docker.com/products/docker-desktop/)

  _used for deploying app simulation and bug resolving_

## Run Local Development

```bash
# will install required dependencies
yarn install

# Runing local development
yarn start:dev
```

## Deploying the App

**`NOTE`**: please use `docker compose` and please do not change `docker-compose.yml` or `Dockerfile`.
Any change that resulting error at your own risk.

1. Successful case

   ```bash
   # 1. change current branch into your development branch, or if you are already in that branch skip this step

   git checkout <development_branch>

   # 2. pull latest base code from git repository

   git pull origin <branch_name>

   # 3. rebuild and restart current docker container

   docker compose up --build

   # 4. check the deployment logs

   docker compose logs
   ```

2. Added new dependencies or commit changes that affect `node_modules` or `yarn.lock`

   ```bash
   # 1. change current branch into your development branch, or if you are already in that branch skip this step

   git checkout <development_branch>

   # 2. pull latest base code from git repository

   git pull origin <branch_name>

   # 3. unmount docker image

   docker compose down

   # 4. search the docker container used by this app

   docker container ls --all

   # 5. remove the container

   docker container rm <CONTAINER_ID>

   # 6. search the docker image used by this app

   docker image ls

   # 7. remove the image

   docker image rm <REPOSITORY>

   # 8. search the docker volume used by this app

   docker volume ls

   # 9. remove the volume

   docker volume rm <VOLUME_NAME>

   # 10. rebuild and start the docker image

   docker compose up --build

   # 11. check the deployment logs

   docker compose logs
   ```

3. Failed case

   ```bash
   # 1. change current branch into your development branch, or if you are already in that branch skip this step

   git checkout <development_branch>

   # 2. pull latest base code from git repository

   git pull origin <branch_name>

   # 3. stop and remove the docker container

   docker compose down

   # 4. rebuild and start the docker container

   docker compose up --build

   # 5. check the deployment logs

   docker compose logs
   ```

# Color palettes

usage:

- independent use

  <`css_attribute`>="<`palette_name`>.<`palette_number`>"

  ```html
  <!-- example -->
  <Text color="greenish.300">...</Text>
  <Box bgColor="teal.400">...</Box>
  <Box bgColor="smokewhite">...</Box>
  ```

- using colorScheme chakra UI

  colorScheme="<`palette_name`>"

  ```html
  <!-- example -->
  <button colorScheme="blue">...</button>
  <button colorScheme="blackAlpha">...</button>
  ```

A. Custom Color Palettes

1. `greenish`

   - 100: ![#feffd0](https://placehold.co/15x15/feffd0/feffd0.png) `#feffd0`
   - 200: ![#fdff83](https://placehold.co/15x15/fdff83/fdff83.png) `#fdff83`
   - 300: ![#f5f96b](https://placehold.co/15x15/f5f96b/f5f96b.png) `#f5f96b`
   - 400: ![#d7de22](https://placehold.co/15x15/d7de22/d7de22.png) `#d7de22`
   - 500: ![#bdc411](https://placehold.co/15x15/bdc411/bdc411.png) `#bdc411`
   - 600: ![#9da306](https://placehold.co/15x15/9da306/9da306.png) `#9da306`
   - 700: ![#737800](https://placehold.co/15x15/737800/737800.png) `#737800`
   - 800: ![#4d5002](https://placehold.co/15x15/4d5002/4d5002.png) `#4d5002`
   - 900: ![#2f3100](https://placehold.co/15x15/2f3100/2f3100.png) `#2f3100`

2. `teal`

   - 100: ![#E6FFFA](https://placehold.co/15x15/E6FFFA/E6FFFA.png) `#E6FFFA`
   - 200: ![#B2F5EA](https://placehold.co/15x15/B2F5EA/B2F5EA.png) `#B2F5EA`
   - 300: ![#7ad0d4](https://placehold.co/15x15/7ad0d4/7ad0d4.png) `#7ad0d4`
   - 400: ![#70CBCF](https://placehold.co/15x15/70CBCF/70CBCF.png) `#70CBCF`
   - 500: ![#319795](https://placehold.co/15x15/319795/319795.png) `#319795`
   - 600: ![#2C7A7B](https://placehold.co/15x15/2C7A7B/2C7A7B.png) `#2C7A7B`
   - 700: ![#285E61](https://placehold.co/15x15/285E61/285E61.png) `#285E61`
   - 800: ![#234E52](https://placehold.co/15x15/234E52/234E52.png) `#234E52`
   - 900: ![#1D4044](https://placehold.co/15x15/1D4044/1D4044.png) `#1D4044`

3. `blackSolid`

- 300: ![#3d404d](https://placehold.co/15x15/3d404d/3d404d.png) `#3d404d`
- 400: ![#2F3447](https://placehold.co/15x15/2F3447/2F3447.png) `#2F3447`
- 500: ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000`
- 600: ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000`
- 700: ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000`
- 800: ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000`
- 900: ![#000000](https://placehold.co/15x15/000000/000000.png) `#000000`

B. Default Color Palettes

**`NOTE`**: Refer to [chakra UI documentation](https://chakra-ui.com/docs/styled-system/theme) exclude the `teal` palette

C. Independent Colors

**`NOTE`**: These colors cannot be used for `colorScheme`

1. `smokewhite`: ![#FCFCFE](https://placehold.co/15x15/FCFCFE/FCFCFE.png) `#FCFCFE`

2. `charcoalGrey`: ![#2F3447](https://placehold.co/15x15/2F3447/2F3447.png) `#2F3447`
