const express = require('express');
const router = express.Router();

const {
  getAllPost,
  addPost,
  deletePost,
  updatePost,
} = require('../controllers/post.controller');

router.route('/').get(getAllPost).post(addPost);
router.route('/:postId').delete(deletePost).put(updatePost);

module.exports = router;
