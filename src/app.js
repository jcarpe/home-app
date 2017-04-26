const express = require('express');

function homeApp() {

  this.app = express();

  this.configureRootRoute = () => {
    this.app.get('/', (req, res) => {
      res.send('test - we got dat node on dat pi');
    });
  }

  this.init = () => {
    this.configureRootRoute();

    this.app.listen( 8080, () => {
      console.log('home app listening on port 8080');
    });
  }
};

module.exports = homeApp;
