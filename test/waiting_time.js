let chai = require('chai');

let assert = chai.assert;

let mongoose = require('mongoose');

var fetch = require('node-fetch');

var index = require('../build/controller/waiting_time_controller.js');

describe('sanity checks for waiting time route', () => {
	
	it('should return status 200', () => {
		fetch('http://localhost:27017/wait/time').then( (res) => {
			assert.equal(res.status, 200);
		}).catch( (err) => {
			console.log(err);
		})
	});

});