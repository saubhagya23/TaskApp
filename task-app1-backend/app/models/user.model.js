const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  id: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => {
        if (!validator.isEmail(value)) {
            throw new Error({error: 'Invalid Email address'})
        }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 7
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }
  }],
  age: Number,
  }, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }
  next();
})

UserSchema.methods.generateAuthToken = async function() {
  // Generate an auth token for the user
  const user = this
  console.log('user in gen token is->', user);
  const token = jwt.sign({_id: user._id}, '12345') // 12345 is the JWT_KEY
  user.tokens = user.tokens.concat({token})
  await user.save();
  return token;
}

UserSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  console.log('why??????', email);
  const user = await User.findOne({ email } )
  console.log('user in cred mtd->', user);
  if (!user) {
      throw new Error({ error: 'Invalid login credentials' });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  console.log('is passwrd match->', isPasswordMatch);
  if (!isPasswordMatch) {
      throw new Error({ error: 'Invalid login credentials' });
  }
  return user;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;