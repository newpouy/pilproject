var mongoose = require('mongoose');

/**
 * User 정보를 담기 위한 Mongo DB model
 * @name userModel
 */
var researchModel = function () {
  var researchSchema = mongoose.Schema({
  	researchId: Number,
  	researchTitle: String,
  	researchObjs: Array,
    content: String,
    username: String,
    like: Number,
    date: { type: Date, default: Date.now }
  });
  return mongoose.model('Bbs', bbsSchema);
};

var objectModel = function(){
  var objectSchema = mongoose.Schema({
    ObjectId: Number,
    ObjectName: String,
    ObjectVotedValue: Number,
    researchId: Number
  });
  return mongoose.model('object', objectSchema);
}

var voteModel = function () {
	var voteModel = mongoose.Schema({
		voteId: Number,
		researchId: Number,
		voteObj: Number,
		voteDate: { type: Date, default: Date.now }
	})
}

module.exports = new researceModel();
module.exports = new voteModel();
module.exports = new objectModel();