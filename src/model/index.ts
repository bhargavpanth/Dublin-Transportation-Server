import mongoose from 'mongoose'
import waiting_time_schema from './waiting_time'
import bike_schema from './bikes'
import bus_schema from './bus'
import beacon_schema from './beacon'

export default function schema() {
    if (process.env.SOURCE === 'mongo') {
        // return all the mongo schemas
        return {
            waiting_time: mongoose.model('waiting_time_analysis', waiting_time_schema, 'waiting_time_analysis'),
            bike: mongoose.model('bike_update', bike_schema, 'bike_update'),
            bus: mongoose.model('bus_update', bus_schema, 'bus_update'),
            beacon: mongoose.model('beacon_update', beacon_schema, 'beacon_update'),
        }
    }
    // add ODM layer for cassandra
    else if (process.env.SOURCE === 'cassandra') {
        // return all the cassandra schemas
    }
}
