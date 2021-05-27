const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const HistorySchema = mongoose.Schema({
    user: {
        type: Schema.ObjectId,
        required: true
    },
    point: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const History = mongoose.model('History', HistorySchema);

module.exports = History;
