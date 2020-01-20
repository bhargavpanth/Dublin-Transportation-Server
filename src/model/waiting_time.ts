import mongoose from 'mongoose'
const { Schema } = mongoose

let WaitingTimeSchema = new Schema({
	_id: String,
	stops: Array
},{
	collection: 'waitingtimeanalysis'
})

export default WaitingTimeSchema;