'use strict';
const path = require('path');
const axios = require('axios');

module.exports = (app) => {
	app.get('/', (req, res) => {
	  res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	app.get('/bundle.js', (req, res) => {
	  res.sendFile(path.resolve(__dirname + '/../bundle.js'));
	});

	app.get('/style/style.css', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../style/style.css'));
	});

	app.post('/stock', (req, res) => {
		axios.get(`http://data.benzinga.com/rest/richquoteDelayed?symbols=${req.body.symbol}`)
			.then((company) => {
				if(company.data.null) {
					res.status(422).send({error: 'No symbol of was found'});
				} else {
					res.json(company.data);
				}
			})
			.catch(err => console.log('err', err))
	});
}