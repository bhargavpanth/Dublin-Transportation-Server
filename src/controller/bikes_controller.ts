import express from 'express'
import schema from '../model'

const { bike } = schema()
let router = express.Router()

var index = (app, route) => {
	router.get('/', (req, res) => {
		if (req.query.encode === 'geojson') {
			// geojson middleware
		} else {
			return new Promise((resolve, reject) => {
				return bike.find({}, (err, data) => {
					if (data) {
						resolve(data);
					} else {
						reject(err);
					}
				});
			}).then( (data) => {
				res.status(200)
				res.json(data)
			}).catch( (err) => {
				res.status(500)
				res.json({
					status: 500,
					message: 'internal server error'
				})
			})
		}
	})

	return router
}

export default index
