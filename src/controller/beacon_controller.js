import express from 'express';

let router = express.Router();

import mongoose from 'mongoose';

// Beacon Schema
const beacon_schema = require('../model/beacon.js');
const beacon = mongoose.model('beacon', beacon_schema, 'beacon');


var index = (app, route) => {

	router.get('/', (req, res) => {
		res.status(405);
		
		res.json({
			'status': 405,
			'message': 'method not allowed'
		});
	});

	router.post('/',  (req, res) => {

		if (req.body.stop_num && req.body.counter) {
			let stop = req.body.stop_num;
			let counter = req.body.counter;

			let update = new Promise ( (resolve, reject) => {
				beacon.findOneAndUpdate({
					stop_id: stop
				}, {
					$set: {
						stop_id: stop,
						count: counter
					}
				},{
					upsert: true,
					new: true
				},(err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(data);
					}
				})
			});

			update.then( (data) => {
				res.status(200);
				res.json({
					'status': 200,
					'message': data
				});
			})

			update.catch( (err) => {
				res.status(500);
				res.json({
					'status': 500,
					'message': 'internal server error'
				});
			});

		} else {
			res.status(405);
			res.json({
				'status': 405,
				'message': 'bad request'
			});
		}

	});

	return router;
}

export default index;
