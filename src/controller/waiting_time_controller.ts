import express from 'express'
import schema from '../model'

const { waiting_time } = schema()
let router = express.Router()

var index = (app, route) => {
	router.get('/', (req, res) => {
		// This makes no sense - rewrite
		return new Promise((resolve, reject) => {
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
