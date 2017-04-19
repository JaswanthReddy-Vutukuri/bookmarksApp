var bmRoutes = require('./routes/bookmark-routes.js');	//Exchange routes

module.exports = function(app) {

	// frontend routes
	// route to handle all angular requests
	app.post('/api/bookmarks', bmRoutes.createBookmark);
	app.get('/api/bookmarks', bmRoutes.getBookmarks);
	app.delete('/api/bookmarks/:bookmark_id', bmRoutes.deleteBookmark);
	
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};