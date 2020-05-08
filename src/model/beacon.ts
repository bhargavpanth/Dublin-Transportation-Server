import { Schema } from 'mongoose'

let BeaconSchema = new Schema({
	stop_id : String,
	count : Number
}, {
	collection: 'beacon'
})

export default BeaconSchema