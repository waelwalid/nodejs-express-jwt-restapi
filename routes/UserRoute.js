const express = require('express');
const router = express.Router();
const UserController = require('../app/api/controllers/UserController');
router.post('/register', UserController.create);
router.post('/auth', UserController.authenticate);
module.exports = router;