const express = require('express');
const app = express();

app.get('/test', (req, res) => {
	res.send('test - we got dat node on dat pi');
});

app.listen(8080, () => {
	console.log('node app listening on port 8080');
});
