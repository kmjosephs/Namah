/**
 * Created by kmjosephs on 1/8/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    creator: Boolean
});

module.exports = mongoose.model("User", UserSchema);