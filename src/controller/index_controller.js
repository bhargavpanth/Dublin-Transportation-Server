import express from 'express';

let router = express.Router();


var index = (app, route) => {
	router.get('/', (req, res) => {
		res.json({
			'status': 200,
			'message': `base route`
		});
		res.end();
	});

	return router;
}

export default index;