const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config=require("config");

const User = require("../models/user_model");
//const Profile=require("../models/profile_model");
const  {loginValidation} = require('../validation/validation');
const route = express.Router();

//const {aggregatefunc} =require('../aggregate_func/lookuppro');
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.post("/loginuser", async(req, res) => {
 //validate the data before logging in
   const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if user has already registered or not
  const user = await User.findOne({ "emailid": req.body.emailid });
  if (!user) return res.status(400).send('Your details does not exist,Please first register/signup');

  //authenticating user
  const validPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  console.log("validPassword"+ validPassword)
  if (!validPassword) return res.status(400).send('Invalid Password!');

  // making and assign a token
  //const token = jwt.sign({ user }, config.get('jwtPrivateKey'));
  const token = jwt.sign({ user }, 'jwtPrivateKey');
  /*Incase profile is needed*/
//  const profile = await Profile.findOne({ emailid: req.body.emailid });
//   if (!profile) return res.send('Profile not found');
 
  try{
  res.status(200).send('You are a valid user with access_token :- '+token);
 }
 catch(err){
  res.status(404).send('Error '+ err);
 }
//We can use aggregate function to join two collection user and profile to fetch the details for better authentication
//  const result=aggregatefunc();
//  if(result){
//    console.log("result");
//   return res.send({ profile: result, access_token: token});
// }
// else{
//   return res.send({ profile: {}, access_token: token});
// }
});
module.exports = route;
