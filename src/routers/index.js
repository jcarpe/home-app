const router = require('express').Router();

const nextBusRouter = require('./next-bus');

router.get('/', (req, res) => {
  res.send('Home App Root');
});

router.use('/bus', nextBusRouter);

module.exports = router;
