const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.get('/newsfeed', controller.index);                //route to newsfeed page
routes.post('/userauth', controller.user);                //route to check login auth
routes.get('/:id', controller.show);                      //route to profile page
routes.get('/editprofile/:id', controller.showUserData);  //route to editprofile, getting data
routes.put('/editprofile/:id', controller.update);        //route to editprofile, posting data
routes.get('/comments/:id', controller.showComments);     //route to comments, using piture_id
routes.post('/comments/:id', controller.createComment);   //route to post comments
routes.post('/pictures', controller.createPic)            //route to post new photo
routes.post('/', controller.create);                      //route to create new account page
routes.post('/like', controller.like)                     //route to like a photo
routes.get('/like/:id', controller.numberLikes)               //route to number of likes a photo has
routes.delete('/:id', controller.destroy);

module.exports = routes;
