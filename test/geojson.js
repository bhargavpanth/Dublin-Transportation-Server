var mongoose = require('mongoose');

var chai = require('chai');

var assert = chai.assert;


describe("should return objects in geojson format", () => {
	
	it("passed lat and lon to be converted to geojson for rendering", () => {
		var obj = [{"_id":"5aba4dbaad10be8a5c4bcab7","number":42,"available_bike_stands":30,"available_bikes":0,"bike_stands":30,"last_update":1522158932000,"name":"SMITHFIELD NORTH","position":{"lat":53.349562,"lng":-6.278198}}]
		// let geo_json_obj = obj.map(each_obj => { "type": "Feature", "geometry": { "type": "Point", "coordinates": [each_obj.position.lat, each_obj.position.lng] }, "properties": { "number":each_obj.number, "available_bike_stands": each_obj.available_bike_stands, "available_bikes":each_obj.available_bikes, "bike_stands":each_obj.bike_stands, "last_update":each_obj.last_update, "name":each_obj.name }});
		// assert.equal(geo_json_obj, Object({"type": "Feature", "geometry": { "type": "Point", "coordinates": [53.349562, -6.278198] }, "properties": { "number":42, "available_bike_stands": 30, "available_bikes":0, "bike_stands":30, "last_update":1522158932000, "name":"SMITHFIELD NORTH" }});
	});

});