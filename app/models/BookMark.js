// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('BookMark', {
	siteCategory : {type : String},
	siteName : {type : String},
	siteUrl : {type : String}
});
