const express = require('express');
const router = express.Router();

const {authController} = require('../controllers');

router.post('/email', authController.emailvalidate);
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.put('/', authController.edit);
router.delete('/', authController.remove);
router.post('/password', authController.password);

module.exports = router;
