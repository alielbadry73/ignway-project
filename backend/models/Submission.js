const supabase = require('../supabaseClient');
const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  homeworkId: { type: mongoose.Schema.Types.ObjectId, ref: 'Homework', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  file: { type: String },
  text: { type: String },
  submittedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Submission', SubmissionSchema);
