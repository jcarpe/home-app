
module.exports = (data) => {
  let trimmed = {};
  trimmed.busses = [];

  data.body.predictions.forEach((item) => {
    let bus = {
      info: item.$,
      direction: {
        name: '',
        predictions: []
      }
    };

    if (item.direction) {
      bus.direction.name = item.direction[0].$.title;
      bus.direction.predictions = [];

      item.direction[0].prediction.forEach((item) => {
        bus.direction.predictions.push(item.$);
      });
    }

    trimmed.busses.push(bus);
  });

  return trimmed;
};
