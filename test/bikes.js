var chai = require('chai');
var fetch = require('fetch-promise')
var assert = chai.assert;

// var bikes_controller = require('../server/controller/bikes_controller.js');

describe('route should handle basic HTTP methods - GET and POST', () => {
	it('should handle GET', () => {
		let resp = fetch('http://localhost:8080/poll/bikes/data', (err, meta, body) => {
			console.log(body);
		});
	});
});


describe('it should return samples of dublin bikes data', () => {
	it('should return objects having stop names', () => {
		
	});
});