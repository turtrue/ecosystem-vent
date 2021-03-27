const { Schema, model } = require('mongoose');

const schema = new Schema({
    category: {
        type: String,
        required: true
    },
    translit: {
        type: String,
        required: true
    },
    product: { type: Schema.Types.ObjectId, ref: 'Product' }
});

module.exports = model('Category', schema);