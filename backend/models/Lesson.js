const supabase = require('../supabaseClient');
const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  content: { type: String },
  videoUrl: { type: String },
  files: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Lesson', LessonSchema);
