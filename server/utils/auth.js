const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  
  authMiddleware: function ({ req }) {
    console.log('INSIDE MIDDLEWARE!!')
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    console.log('token!!!!', token)
    console.log('headers!!!', req.headers.authorization)

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {

      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    console.log('aboutto verify toke!')
    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log('Token vaerifited!', data)
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
   // next();
   return req
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
