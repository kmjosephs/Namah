/**
 * Created by kmjosephs on 1/11/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LemmaSchema = new Schema({
    word: String,
    partOfSpeech:String;
});

module.exports = mongoose.model('Lemma', LemmaSchema);