const express = require('express');
const router = express.Router();

// Post Router
const postRouter = require('./posts.router');
const authRouter = require('./auth.router');
const { validateToken } = require('../middlewares/auth.middleware');
const { logout } = require('../controllers/auth.controller');

router.use(authRouter);

// Secured
router.use([validateToken]);
router.post('/logout', logout);
router.use('/posts', postRouter);

module.exports = router;
