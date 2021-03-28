const { Schema, model } = require('mongoose');

const schema = new Schema({
    isSubcategory: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    translit: {
        type: String,
        required: true
    },
    image: {
        src: String,
        alt: String
    },
    content: [
        {
            type: {
                type: String,
                required: true
            },
            data: [String],
            title: String,
            images: [
                {
                    src: String,
                    alt: String,
                    name: String
                }
            ]
        }
    ]
});

module.exports = model('Product', schema);