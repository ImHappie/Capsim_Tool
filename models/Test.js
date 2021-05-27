const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const TestSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: [{
        choice: {
            type: String,
            required: true
        },
        mark: {
            type: Number,
            required: true
        }
    }],
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;
