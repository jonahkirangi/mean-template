var mongoose = require('mongoose');

var thingSchema = new mongoose.Schema({
  name: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Thing', thingSchema);
