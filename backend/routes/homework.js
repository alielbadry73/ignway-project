const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getHomeworkByCourse, createHomework } = require('../controllers/homeworkController');

router.get('/:courseId', getHomeworkByCourse);
router.post('/', auth, createHomework);

module.exports = router;
