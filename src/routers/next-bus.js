const router = require('express').Router();

const nextBusLoader = require('../loaders/next-bus');
const nextBus = new nextBusLoader();

router.get('/50', (req, res) => {
  nextBus.getPredictions(2789)
    .then((response) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
