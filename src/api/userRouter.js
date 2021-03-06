'use strict';

const router = require('express').Router();
const User = require('../db/models/user');

router.post('/', function(req,res,next){
  User.create({ name: req.body.name, email: req.body.email, password: req.body.password })
    .then(function(user){
      res.send(user.dataValues.email);
    })
    .catch(next);
});

router.get('/:email', function(req,res,next){
  User.findAll({ 
    where: {
      email: req.params.email 
    }})
    .then((result)=>{
      if(result.length === 0) {
        res.send(result);
      } else {
        const user = result[0].dataValues;
        res.send(user);
      }
    })
    .catch(next);
});


module.exports = router;
