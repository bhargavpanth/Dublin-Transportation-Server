let chai = require('chai');

let assert = chai.assert;

let mongoose = require('mongoose');

var fetch = require('node-fetch');

let request = require('request');


describe('sanity checks for beacon route', () => {
	
	it('should return status 200', () => {
		fetch('http://localhost:8080/beacon').then( (res) => {
			assert.equal(res.status, 405);
		}).catch( (err) => {
			console.log(err);
		})
	});

	it('should throw 400 - malformatted request', () => {
		data = JSON.stringify({'stop_id':1});
		request.post('http://localhost:');
	});

});