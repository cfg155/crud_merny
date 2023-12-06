const { user_detail } = require('../db/models');
const jwt = require('jsonwebtoken');

module.exports.validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  const err = new Error();
  try {
    if (!authorization) {
      err.message = 'You are not authorized to access the data';
      return next(err);
    }

    const decodedAccessToken = jwt.decode(authorization);
    const currentTime = new Date().getTime();
    const exp = decodedAccessToken.exp * 1000;

    if (currentTime > exp) {
      await user_detail.destroy({ where: { token: authorization } });
      err.message = 'You are not authorized to access the data';
      return next(err);
    }

    const userDetail = await user_detail.findOne({
      where: { token: authorization },
    });

    if (!userDetail) {
      err.message = 'You are not authorized to access the data';
      return next(err);
    }
    req.userId = decodedAccessToken.id;
    next();
  } catch (error) {
    err.message = error.message;
    return next(error);
  }
};
