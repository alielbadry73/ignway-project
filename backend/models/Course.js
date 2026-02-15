const supabase = require('../supabaseClient');
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
