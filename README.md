# mern-auth

Minimal full-stack MERN app with authentication using passport and JWTs.

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Medium Series

- [Build a Login/Auth App with the MERN Stack — Part 1 (Backend)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669)
- [Build a Login/Auth App with the MERN Stack — Part 2 (Frontend & Redux Setup)](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-2-frontend-6eac4e38ee82)
- [Build a Login/Auth App with the MERN Stack — Part 3 (Linking Redux with React Components)](https://blog.bitsrc.io/build-a-login-auth-app-with-the-mern-stack-part-3-react-components-88190f8db718)

## Configuration

Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`.

### Installation

1. Follow these steps to install MongoDB Community Edition using Homebrew's brew package manager. Be sure that you have followed the installation prerequisites above before proceeding.

  ```sh
  brew tap mongodb/brew
  ```
If you have already done this for a previous installation of MongoDB, you can skip this step.
2. To install MongoDB, run the following command in your macOS Terminal application:

  ```sh
  brew install mongodb-community@4.4
  ```
## Run MongoDB Community Edition

* To run MongoDB (i.e. the mongod process) as a macOS service, issue the following:

  ```sh
  brew services start mongodb-community@4.4
  ```

* To stop a mongod running as a macOS service, use the following command as needed:

  ```sh
  brew services stop mongodb-community@4.4
  ```
## Head to Mongdb compass

Fill out manually with server
  ```sh
  localhost:27017
  ```

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm start

// Server runs on http://localhost:5000 and client on http://localhost:3000
```

For deploying to Heroku, please refer to [this](https://www.youtube.com/watch?v=71wSzpLyW9k) helpful video by TraversyMedia.
