const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("./model/usersModel");
const passport = require("passport");
// const secretOrKey= require("./Config").secretOrKey;
// const keys = require("./keys")



const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
console.log(process.env.secretOrKey)

 opts.secretOrKey = process.env.secretOrKey;
//  opts.secretOrKey = keys.secretOrKey;

module.exports = passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ email: jwt_payload.email }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);
