var mongoose = require('mongoose');

var thingSchema = new mongoose.Schema({
  name: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
  amount: Number,
  important: Boolean,
});

module.exports = mongoose.model('Thing', thingSchema);
