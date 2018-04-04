const mongoose = require('mongoose');

const { Schema } = mongoose;

let BusSchema = new Schema({
	
	_id: String,

	stopid: String,
	
	due_count: Number,
	
	lattitude: String,
	
	longitude: String,

	timestamp: Date,
	
	waiting_time: Number

}, {
	collection: 'bus_update'
});

export default BusSchema;