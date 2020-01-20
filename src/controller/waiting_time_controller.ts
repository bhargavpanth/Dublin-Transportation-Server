import express from 'express'
import mongoose from 'mongoose'
import waiting_time_schema from '../model/waiting_time.js'

let router = express.Router()
const waiting_time = mongoose.model('waitingtimeanalysis', waiting_time_schema, 'waitingtimeanalysis');

var index = (app, route) => {
	router.get('/', (req, res) => {
		// This makes no sense - rewrite
		let results = new Promise((resolve, reject) => {
			waiting_time.find({}, (err, data) => {
				if (data) {
					resolve(data)
				} else {
					reject(err)
				}
			})
		}).then((data) => {
			res.status(200)
			res.json({
				'status': 200,
				'message': data
			})
		}).catch((err) => {
			res.status(500)
			res.json({
				'status': 500,
				'message': 'internal server error'
			})
		})
	})
	return router
}

export default index
