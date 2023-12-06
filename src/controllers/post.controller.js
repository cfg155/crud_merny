const { posts, users } = require('../db/models');

module.exports.getAllPost = async (req, res, next) => {
  const err = new Error();
  try {
    const getAllPost = await posts.findAll({
      include: [{ model: users, attributes: ['username'] }],
    });

    res.json({
      success: true,
      data: getAllPost,
    });
  } catch (error) {
    err.message = `Something wrong with the input`;
    return next(err);
  }
};

module.exports.addPost = async (req, res) => {
  const { userId } = req;
  const payload = req.body;
  const err = new Error();

  try {
    await posts.create({
      id: crypto.randomUUID(),
      user_id: userId,
      ...payload,
    });

    return res.json({
      success: true,
      data: payload,
    });
  } catch (error) {
    err.message = `Something wrong with the input`;
    return next(err);
  }
};

module.exports.deletePost = async (req, res, next) => {
  const { postId } = req.params;
  const err = new Error();

  try {
    await posts.destroy({ where: { id: postId } });
    res.json({ success: true, data: { postId } });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};

module.exports.updatePost = async (req, res) => {
  const { postId } = req.params;
  const payload = req.body;
  const err = new Error();

  try {
    await posts.update({ ...payload }, { where: { id: postId } });
    res.json({ success: true, data: payload });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};
