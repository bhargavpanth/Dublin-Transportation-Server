var mongoose = require('mongoose');

var chai = require('chai');

var assert = chai.assert;

var fetch = require('node-fetch');

var index = require('../build/controller/index_controller.js');

describe('peform checks on the route', () => {

	it('should return status 200 on GET', () => {
		fetch('http://localhost:8080').then( (res) => {
			assert.equal(res.status, 200);
		}).catch( (err) => {
			console.log(err);
		});
	});

	it('should return message on GET to base route', () => {
		fetch('http://localhost:8080').then( (body) => {
			assert.equal(res.body, `{ 'status': 200,'message': 'base route'}`);
		});
	});

	it('should return object on GET request', () => {
		fetch('http://localhost:8080/poll/bus/data').then( (res) => {
			assert.equal(res.status, 200);
		});
	});


});
