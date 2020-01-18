import express from 'express'
import mongoose from 'mongoose'
import bus_schema from '../model/bus.js'

let router = express.Router()
const dublin_bus = mongoose.model('bus_update', bus_schema, 'bus_update')


var index = (app, route) => {
	router.get('/', (req, res) => {
		let results = new Promise((resolve, reject) => {
			dublin_bus.find({}, (err, data) => {
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