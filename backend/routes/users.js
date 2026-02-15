const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllUsers, deleteUser } = require('../controllers/userController');

router.get('/', auth, getAllUsers);
router.delete('/:id', auth, deleteUser);

module.exports = router;
