const User = require('../models/user.model');

console.log('User111--->', User);

// Create and Save a new User
exports.create = async (req, res) => {
  // Validate request
  console.log('request is--->', req.body);
  if(!req.body.name && !req.body.id) {
    return res.status(400).send({
        message: "User name can not be empty"
    });
  }

  try {
    const user = new User(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    // console.log('1234', user, '##', token);
    res.status(201).send({ user, token })
  } catch (error) {
    console.log('error is->', error);
    res.status(400).send(error)
  }

  // try {
  //   // Create a User
  //   const user = new User({
  //     name: req.body.name/*  || "Untitled User" */, 
  //     email: req.body.email,
  //     password: req.body.password,
  //     id: req.body.id,
  //     age: req.body.age,
  //     designation: req.body.designation,
  //     competency: req.body.competency,
  //   });
  //   const token = await user.generateAuthToken();

  //   // Save Note in the database
  //   await user.save()
  //   .then(data => {  
  //     console.log('hello123 save->>', data, '###', token);
  //     res.send({data, token});
  //   }).catch(err => {
  //       res.status(500).send({
  //           message: err.message || "Some error occurred while creating the User."
  //       });
  //   });
  // }  catch (error) {
  //   res.status(400).send(error)
  // }  
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  User.find()
    .then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    });
};

exports.findLoginUser = async (req, res) => {
  try {
    console.log('req.body->', req.body);
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password)
    console.log('user data->', user);
    if (!user) {
        return res.status(401).send({error: 'Login failed! Check authentication credentials'})
    }
    const token = await user.generateAuthToken();
    console.log('@#@#@#@#', user, '***', token);
    res.send({ user, token })
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.findCurrentUser = (req, res) => {
  console.log('current user-->', req.user);
  res.send(req.user);
}

// Find a single user with a userId
exports.findOne = (req, res) => {
  console.log('user.params->', req.params);
  User.find({ id: req.params.userId })
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
  // Validate Request
  if(!req.params.userId) {
    return res.status(400).send({
        message: "User's id can not be empty"
    });
  }

  // Find user and update it with the request body
  User.updateOne({id: req.params.userId}, {
    $set: {
      name: req.body.name/*  || "Untitled User" */, 
      age: req.body.age,
    }
  })
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "User not found with id " + req.params.userId
          });
      }
      console.log('user sent->', user);
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "User not found with id " + req.params.userId
          });                
      }
      return res.status(500).send({
          message: "Error updating user with id " + req.params.userId
      });
  });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
  User.remove({ id: req.params.userId })
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};

exports.logoutUser = async(req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token != req.token
    })
    await req.user.save()
    res.status(200).send({
      message: "User is logged out!!!"
  });
} catch (error) {
    res.status(500).send(error)
}
}