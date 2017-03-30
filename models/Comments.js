var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  title: String,
  price: Number,
  picture: String,
  description: String,
  owner: String,
  contact: String,
  //is_sold: {type: Boolean, default: false},
});
CommentSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
mongoose.model('Comment', CommentSchema);
