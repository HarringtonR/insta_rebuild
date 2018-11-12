const Model = require('../models/models');
const controller = {};

controller.index = (req, res) => {
  Model.findAll()
    .then(obj => {
      res.json({
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

// checks if username and password entered by user exists and is correct
controller.user = async (req, res) => {
    const user = await Model.findUser(req.body.username)
    .then(obj => {
      let data;
      console.log(obj)
      if(obj.length === 0){
        data = { data: 'no user' }
      }
      if (req.body.password === obj[0].password){
        data = { data: 'good pass', user: obj[0].username, user_id:obj[0].id }
      } else {
        data = { data: 'bad pass' }
      }
      res.json(data);
    }).catch(err => {
      console.log(err);
      res.end()
    });
}

//showing pictures on profile page
controller.show = (req, res) => {
  Model.findByUsername(req.params.id)
    .then(obj => {
      res.json({
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

//creating a new user
controller.create = (req, res) => {
  Model.create({
    username: req.body.username,
    password: req.body.password,
    full_name: req.body.full_name,
    phone: req.body.phone,
    bio: req.body.bio,
    profpic: req.body.profpic
  })
  .then(obj => {
    res.json({
      message:'yay new Finsta user!',
      data: obj,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

// getting data for edit profile page
controller.showUserData = (req, res) => {
  Model.findByUsernameForEdit(req.params.id)
    .then(obj => {
      res.json({
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    });
}

//editing profile
controller.update = (req, res) => {
  // console.log('this is req: ', req.body)
  Model.update({
    username: req.body.username,
    password: req.body.password,
    full_name: req.body.full_name,
    phone: req.body.phone,
    bio: req.body.bio,
    profpic_url: req.body.profpic_url
  }, req.body.username)
  .then(obj => {
    res.json({
      message: 'profile updated successfully',
      data: obj,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

//getting comments for a picture
controller.showComments = (req, res) => {
  Model.findComments(req.params.id)
    .then(obj => {
      res.json({
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    })
}

//posting a new comment for a picture
controller.createComment = (req, res) => {
  Model.postComment({
    picture_id: req.body.picture_id,
    user_id: req.body.user_id,
    comment: req.body.comment,
  })
  .then(obj => {
    res.json({
      message:'yay new comment!',
      data: obj,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

//posting a new pic
controller.createPic = (req, res) => {
  console.log(req.body)
  Model.postPic({
    user_id: req.body.user_id,
    img_url: req.body.img_url,
    img_file: req.body.img_file
  })
  .then(obj => {
    res.json({
      message:'yay new picture!',
      data: obj,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

//liking a photo
controller.like = (req, res) => {
  Model.like({
    user_id: req.body.user_id,
    picture_id: req.body.picture_id
  })
  .then(obj => {
    res.json({
      message:'yay you liked a photo!',
      data: obj,
    });
  }).catch(err => {
    res.status(500).json(err);
  });
}

//get number of likes for a photo
controller.numberLikes = (req, res) => {
  Model.numberLikes(req.params.id)
    .then(obj => {
      res.json({
        data: obj,
      });
    }).catch(err => {
      res.status(500).json({err});
    })
}


controller.destroy = (req, res) => {
  Model.destroy(req.params.id)
    Model.findById(req.params.id)
    .then(model => {
      res.json({
        message: 'Model deleted successfully!',
      });
    }).catch(err => {
      res.status(500).json(err);
    });
}

module.exports = controller;
