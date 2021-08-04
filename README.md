# Wetbat Travel

## Getting Started
Install the required modules in both the `client` and `server` directories:

### `npm install`
<br>

## Available Scripts

To start the development client server, please run the following in the `client` directory:
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br>
<br>

In the `server` directory, please run the following to start the API development server
### `npm run dev`

<br>

You can create a `PORT` variable within the `.env` file within the `server` directory
```
PORT=8000
```
<br>

## Setting up the Database
This project is using [PostgreSQL](https://www.postgresql.org/) in combination with [Sequelize](https://sequelize.org/). After installing PostgreSQL on your machine and installing the required node modules in your cloned repository, you can create the database and user. Then, please place the following environment variables in your `server` `.env` file

```
DATABASE_NAME=wetbat
DATABASE_USER=yourusename
DATABASE_PASS=password
DEV_DATABASE_URL=postgres://shadeemerhi:wetbatsm@127.0.0.1:5432/wetbat
```
**Note**: These variables are accessed in `./database/config/config.js`
<br>
<br>


## Creating the Schema
To communicate with the database using *Sequelize*, please ensure that you have installed the Sequelize CLI:
### `npm install --save-dev sequelize-cli`
<br>

The database tables can be created by running the migrations:
### `sequelize-cli db:migrate`
<br>

The migrations can be reverted using:
### `sequelize-cli db:migrate:undo`
<br>

**Note**: to use the command `sequelize` rather than `sequelize-cli`, you can install the CLI globally:
### `npm install -g sequelize-cli`
<br>


## Seeding the Database
To populate the database using the seed files, please run:
### `npx sequelize-cli db:seed:all`
<br>

To revert the seeds:
### `npx sequelize-cli db:seed:undo`