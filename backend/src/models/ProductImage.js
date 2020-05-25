var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imageSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('ProductImage', imageSchema);