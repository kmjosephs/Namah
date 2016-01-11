/**
 * Created by kmjosephs on 1/11/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DictionarySchema = new Schema({
    dictionaryname: String,
    ethnologuecode: String,
    lastupdate: type: Date, default: Date.now
});

module.exports = mongoose.model('Dictionary', DictionarySchema);