import express from 'express';

import http from 'http';

let router = express.Router();

// const io = require('socket.io')(3000).sockets;

const mongo = require('mongodb').MongoClient;

import client from 'mongodb';


var dashboard = (app, route) => {


	router.get('/', () => {

		mongo.connect('mongodb://127.0.0.1/dublin_transport', (err, db) => {
			if(err){
				throw err;
			}
    		console.log('MongoDB connected...');
    		// Connect to Socket.io
    		client.on('connection', (socket) => {
    			let updates = db.collection('posts');
    			// Create function to send status
    			let sendStatus = (s) => {
    				socket.emit('status', s);
    			}
    			// Get chats from mongo collection
    			updates.find().limit(100).sort({_id:1}).toArray(function(err, res){
    				if(err){
    					throw err;
    				}
    				// Emit the messages
    				socket.emit('output', res);
    			});
    		});
    	});

	});

	return router;
}


export default dashboard;