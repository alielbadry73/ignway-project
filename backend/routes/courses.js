const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllCourses, createCourse, deleteCourse } = require('../controllers/courseController');

router.get('/', getAllCourses);
router.post('/', auth, createCourse);
router.delete('/:id', auth, deleteCourse);

module.exports = router;
