const express = require('express');
const router = require('./routers/index');

function homeApp() {

  this.app = express();

  this.configureRouter = () => {
    this.app.use(router);
  }

  this.init = () => {
    this.configureRouter();

    this.app.listen( 8080, () => {
      console.log('home app listening on port 8080');
    });
  }
};

module.exports = homeApp;
