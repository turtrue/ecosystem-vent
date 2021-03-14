const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {
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
            sectionTitle: String,
            listTitle: String,
            data: [String],
            images: [
                {
                    src: String,
                    alt: String,
                    name: String
                }
            ]
        }
    ],
    category: {
        type: String,
        required: true
    }
});

module.exports = model('Product', schema);