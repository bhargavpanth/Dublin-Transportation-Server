const mongoose = require('mongoose');

const { Schema } = mongoose;

let BikeSchema = new Schema({

	_id : String,
	
	number : Number,
	
	available_bike_stands : Number,
	
	available_bikes : Number,
	
	bike_stands : Number,
	
	last_update : Number,
	
	name : String,
	
	position : Object

}, {
	collection: 'bikes_update'
});

export default BikeSchema;