const supabase = require('../supabaseClient');
const mongoose = require('mongoose');

const HomeworkSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  description: { type: String },
  deadline: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Homework', HomeworkSchema);
