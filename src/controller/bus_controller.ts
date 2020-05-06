import express from 'express'
import schema from '../model'

const { bus } = schema()
let router = express.Router()

var index = (app, route) => {
	router.get('/', (req, res) => {
		let results = new Promise((resolve, reject) => {
			bus.find({}, (err, data) => {
				if (data) {
					resolve(data)
				} else {
					reject(err)
				}
			})
		})

		if (req.query.encode === "geojson") {
			// geojson middleware	
			// let geojson = {  }
			// "type": "FeatureCollection", "features": [{ "type": "Feature", "geometry" : { "type": "Point", "coordinates": [d["lon"], d["lat"]] }, "properties" : d }]
			results.then( () => {
				res.status(200)
				res.json({'status': 200})
			})
		} else {
		 results.then( data => {
		 	res.status(200)
		 	res.json(data)
		 }).catch( err => {
		 	res.status(500);
		 	res.json({'status': 500, 'message': 'internal server error'})
		 })
		}
	})
	return router
}

export default index
