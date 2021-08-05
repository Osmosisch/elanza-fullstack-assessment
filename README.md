This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Before starting, in the project directory run:

### `npm install`

To run the react application in development mode run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

To run the node.js server with auto reloading run:

### `npm run server`

To run the frontend and backend at the same time run:

### `npm run dev`

To initialise the database (postgresql), as the postgres user, run:

```
create user elanza with password 'test';
create database elanza owner elanza encoding 'utf-8';
```
