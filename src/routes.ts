// Routes are unreadable - move to a different implementation
module.exports = {
	'/': require('./controller/index_controller.js'),
	// deprecate this route
	'/poll/bus/data': require('./controller/bus_controller.js'),
	// deprecate this route
	'/poll/bikes/data': require('./controller/bikes_controller.js'),
	'/wait/time': require('./controller/waiting_time_controller.js'),
	'/beacon': require('./controller/beacon_controller.js')
}
