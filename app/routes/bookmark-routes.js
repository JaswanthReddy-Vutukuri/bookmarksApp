/* ============================================================================
	Server side Routing
	Route Definitions

============================================================================ */
'use strict';

//Get the Mongoose Model
var BookmarkModel = require('../models/BookMark.js');

module.exports = {
    /* ========================================================================
    CREATE - $http post
    ======================================================================== */
    createBookmark:function(req, res) {

        BookmarkModel.create({
        	siteCategory : req.body.site_category,
        	siteName     : req.body.site_name,
        	siteUrl      : req.body.site_url
		},
		function(err, bookmark) {
			if (err) {
				res.send(err);
			};
			
			//get and return all the bookmarks after you delete one
		    BookmarkModel.find({},function(err, bookmarks) {
		        if (err) {
		    	    res.send(err)
		        };
				res.json(bookmarks);
			});
		});
    },

    /* ========================================================================
    READ - $http get
    ======================================================================== */
    getBookmarks : function(req, res) {

        //use mongoose to get all bookmarks in the database
        BookmarkModel.find({},function(err, bookmarks) {
        	console.log(bookmarks);
            //On error send the error. 
            if (err) {
            	return res.send(err);
            }
            else {
                return res.json(bookmarks); //return all bookmarks in JSON format
			};
		});
    },

    /* ========================================================================
    DELETE - $http delete
    ======================================================================== */
	deleteBookmark : function(req, res) {

	    BookmarkModel.remove({
	        _id : req.params.bookmark_id
		},

		function(err, bookmark) {
		    if (err) {
		    	res.send(err);
		    };

		    //get and return all the bookmarks after you delete one
		    BookmarkModel.find({},function(err, bookmarks) {
		        if (err) {
		    	    res.send(err)
		        };
				res.json(bookmarks);
			});
		});
	}
};