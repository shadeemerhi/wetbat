# Wetbat Travel

## Product Visuals
### Browsing Quotes on Home Page
!["Browsing Quotes"](https://github.com/shadeemerhi/wetbat/blob/master/images/browsing_home.gif)

### Selecting Quote Details
!["Selecting Quote Details"](https://github.com/shadeemerhi/wetbat/blob/master/images/booking_details.gif)

### Creating a Quote
!["Creating Quote"](https://github.com/shadeemerhi/wetbat/blob/master/images/place_booking.gif)

### Deleting a Quote
!["Deleting Quote"](https://github.com/shadeemerhi/wetbat/blob/master/images/delete_booking.gif)


## Getting Started
Install the required modules in both the `client` and `server` directories:

### `npm install`
<br>

## Available Scripts

To start the development client server, please run the following in the `client` directory:
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<br>

In the `server` directory, please run the following to start the API development server
### `npm run dev`

<br>

You can create a `PORT` variable within the `.env` file within the `server` directory
```
PORT=8000
```

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
<br>

## Architectural and Technology Decisions
To accompany PostgreSQL, I chose [Express](https://expressjs.com/) and [Sequelize](https://sequelize.org/) to build the backend. I chose Express as it's the Node framework I am most familiar with, and I chose Sequelize as I have been wanting to learn it for a while and this seemed like a great opportunity to do so. On the frontend, I chose to use [Material UI](https://material-ui.com/) along with React as I am a huge fan of the library.

The main goal I had in mind when crafting the architecture of the application was extensibility. Although this is just a prototype that represents a small part of the entire Wetbat platform, I tried my best to write the components and API such that the entire platform *could* be built on top of it.

On the frontend, this lead to my decision to use hooks such as *useContext* and *useReducer*, and to make the components as modular and exstensible as possible. I figured that in the full product, several different parts other than just *Quote* components may require data from the quote state, which is why I wrapped the dashboard in the *QuoteProvider*.

On the backend, I decided to use routes in combination with controllers to decouple the API from the database. This resulted in a very clean and readable request/response flow that I'm quite happy with.
