import express from 'express';

let router = express.Router();

import mongoose from 'mongoose';

// Bike Schema
const bikes_schema = require('../model/bikes.js');
const dublin_bikes = mongoose.model('bikes_update', bikes_schema, 'bikes_update');


var index = (app, route) => {

	router.get('/', (req, res) => {

		if (req.query.encode === "geojson") {
			// geojson middleware
		} else {
			let results = new Promise((resolve, reject) => {
				dublin_bikes.find({}, (err, data) => {
					if (data) {
						resolve(data);
					} else {
						reject(err);
					}
				});
			}).then( (data) => {
				res.status(200);
				res.json(data);
			}).catch( (err) => {
				res.status(500);
				res.json({
					"status": 500,
					"message": "internal server error"
				});
			});
		}

	});

	return router;
}

export default index;
