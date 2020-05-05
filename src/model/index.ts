import waiting_time_schema from './waiting_time'
import bike_schema from './bikes'
import bus_schema from './bus'
import beacon_schema from './beacon'

if (process.env.SOURCE === 'mongo') {
    // return all the mongo schemas
} else if (process.env.SOURCE === 'cassandra') {
    // return all the cassandra schemas
}
