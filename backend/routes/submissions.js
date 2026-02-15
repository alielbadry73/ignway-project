const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getSubmissionsByHomework, createSubmission } = require('../controllers/submissionController');

router.get('/:homeworkId', getSubmissionsByHomework);
router.post('/', auth, createSubmission);

module.exports = router;
