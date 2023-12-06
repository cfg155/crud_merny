const { users, user_detail } = require('../db/models');
const { encryptPayload } = require('../utils/encrypt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  const decodePassword = atob(password);

  const err = new Error();

  try {
    const user = users.findOne({ where: { username } });
    if (user) throw new Error('User is already exists');

    await users.create({
      id: crypto.randomUUID(),
      username,
      password: encryptPayload(decodePassword),
    });
    res.status(200).json({ success: true, data: { username } });
  } catch (error) {
    err.message = error.message || 'Something wrong when creating a user';
    return next(err);
  }
};

module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  const err = new Error();
  try {
    const user = await users.findOne({ where: { username } });
    if (!user) {
      throw new Error('Username or password is incorrect');
    }

    const userDetail = await user_detail.findOne({
      where: { user_id: user.id },
    });

    if (userDetail) {
      throw new Error('User is still logged in');
    }

    if (!bcrypt.compareSync(atob(password), user.password))
      throw new Error('Username or password is incorrect');

    const token = jwt.sign({ id: user.id, username }, process.env.secret_key, {
      expiresIn: '10m',
    });

    await user_detail.create({
      id: crypto.randomUUID(),
      user_id: user.id,
      token,
    });

    res.status(200).setHeader('access_token', token).json({ success: true });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};

module.exports.logout = async (req, res) => {
  const { authorization } = req.headers;
  const err = new Error();
  try {
    await user_detail.destroy({
      where: {
        token: authorization,
      },
    });

    res.json({ success: true });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};
