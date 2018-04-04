import express from 'express';

let router = express.Router();

import mongoose from 'mongoose';

// dublin bus model
const waiting_time_schema = require('../model/waiting_time.js');
const waiting_time = mongoose.model('waitingtimeanalysis', waiting_time_schema, 'waitingtimeanalysis');

var index = (app, route) => {

	router.get('/', (req, res) => {

		let results = new Promise((resolve, reject) => {
			waiting_time.find({}, (err, data) => {
				if (data) {
					resolve(data);
				} else {
					reject(err);
				}
			});
		}).then((data) => {
			res.status(200);
			res.json({
				'status': 200,
				'message': data
			});
		}).catch((err) => {
			res.status(500);
			res.json({
				'status': 500,
				'message': 'internal server error'
			});
		});

	});

	return router;
}

export default index;