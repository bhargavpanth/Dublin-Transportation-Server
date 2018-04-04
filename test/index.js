/*
ensure to write test cases in ES5 / use babel to compile it if ES6 is used
*/
let chai = require('chai');
let assert = chai.assert;
let mongoose = require('mongoose');


// conncet to local mongodb instance
describe('Connection to LOCAL mongodb', () => {
	it('should connect to local mongo', () => {
		let env = process.env.NODE_ENV | "development";
		if(env === "development"){
			mongoose.connect('mongodb://localhost:27017/test');
		} else {
			process.env.NODE_ENV = "development";
			mongoose.connect('mongodb://localhost:27017/test');
			// assert.equal(mongoose.connect(remote), 'connected to dublin_transport [LOCAL]');
		}
	});
});


// connect to remote mongodb instance

describe('Connect to REMOTE mongodb instance', () => {
	it('should connect to remote instance when node env is set to production', () => {
		let env = process.env.NODE_ENV | "production";
		// replace this with remote instance URL
		let remote = "mongodb://localhost:27017/bus"
		if (env === "production") {
			mongoose.connect(remote)
		} else {
			process.env.NODE_ENV = "production";
			mongoose.connect(remote)
		}
	});
});


describe('check environment variable is set to development', () => {
	it('should set env variable to development', () => {
		process.env.NODE_ENV = "development";
		assert.equal(process.env.NODE_ENV, 'development');
	});
});