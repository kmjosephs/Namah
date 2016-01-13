/**
 * Created by kmjosephs on 1/11/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LemmaSchema = new Schema({
    dictionaryId: Number,
    word: String,
    partOfSpeech:String,
    definition: String
});

module.exports = mongoose.model('Lemma', LemmaSchema);