const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  published: { type: Boolean, default: true },
  publishedOn: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);
