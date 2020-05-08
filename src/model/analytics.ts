import { Schema } from 'mongoose'

// Schema to be extended
let AnalyticsSchema = new Schema({
    _id: String,
	stop_id : String
}, {
	collection: 'analytics'
})

export default AnalyticsSchema
