const jwt = require('jsonwebtoken')
const User = require('../models/user.model');

const auth = async(req, res, next) => {
  console.log('in auth!!', req.header('Authorization'));
    const token = req.header('Authorization').replace('Bearer ', '')
    console.log('token-in auth->', token);
    const data = jwt.verify(token, '12345') // 12345 in place of process.env.JWT_KEY.
    try {
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        console.log('req.header->', req.header, 'data._id', data._id, 'token', token, 'user', user);
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth