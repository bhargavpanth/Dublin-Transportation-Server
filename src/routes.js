module.exports = {
	
	'/': require('./controller/index_controller.js'),
	
	'/poll/bus/data': require('./controller/bus_controller.js'),

	'/poll/bikes/data': require('./controller/bikes_controller.js'),

	'/wait/time': require('./controller/waiting_time_controller.js'),

	'/beacon': require('./controller/beacon_controller.js')

};
