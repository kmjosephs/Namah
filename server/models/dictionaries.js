/**
 * Created by kmjosephs on 1/11/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DictionarySchema = new Schema({
    userId:Number,
    dictionaryname: String,
    ethnologuecode: String,
    location: String
});

module.exports = mongoose.model('Dictionary', DictionarySchema);