import express from 'express'
// const io = require('socket.io')(3000).sockets

let router = express.Router()

var dashboard = (app, route) => {
	router.get('/', () => {
		// TODO: This is disgusting - do not expose it here
	})
	return router
}


export default dashboard;