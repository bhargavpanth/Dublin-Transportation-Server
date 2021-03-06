import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import _ from 'lodash'
import cookieParser from 'cookie-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
// import io from 'socket.io'

let logger = morgan('combined')
const app = express()
// enable socket
// const s_io = io.listen(server)

// Handle CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type,Authorization,auth-token")
  next()
})


app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(cookieParser())
app.use(logger)


// Initialize DB connection
const env = process.env.NODE_ENV || 'development'
if (env === 'development') {
	try{
		// connect to local Mongo connection
		mongoose.connect('mongodb://localhost:27017/bus')
		// replace with logger
		console.log('connected to dublin_transport [LOCAL]')
	} catch(err){
		console.log('MongoDB is not accessible [LOCAL]')
	}
}
else if (env === 'production') {
	// connect to remote instance
	try{
		mongoose.connect('mongodb://localhost:27017/bus');
	} catch(err){
		// replace with logger
		console.log('Remote instance not accessible');
	}
}


// Move away from this
// Initialize Routes with Controllers
var db = mongoose.connection.once('open', () => {
	let routes = require('./routes.js');
	_.forEach(routes, (controller, route) => {
		console.log('Route : ' + route);
		app.use(route, controller.default(app, route))
	})
})

// Start 
const port = process.env.PORT || 8080
app.listen(port, (err) => {
	if (err) {
		console.error(err)
	} else {
		console.log(`App running on port ${port}`)
	}
})

