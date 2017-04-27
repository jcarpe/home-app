const axios = require('axios');
const xmlToJs = require('xml2js').parseString;
const trimBusData = require('../utils/bus-data-trim');

function nextBusLoader () {
  this.getPredictions = (stopId) => {
    return axios.get(`http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=mbta&stopId=${stopId}`)
      .then((response) => {
        let parsedJSON;
        xmlToJs(response.data, (err, result) => {
          if (err) throw err;
          parsedJSON = result;
        });
        return parsedJSON;
      })
      .then((data) => {
        return trimBusData(data);
      });
  }
}

module.exports = nextBusLoader;
