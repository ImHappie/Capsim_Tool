const express = require('express');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId;

const History = require('../../models/History.js');

let router = express.Router();

router.get('/', (req, res) => {
    History.find({}, (err, history) => {
        res.json({ history });
    })
});

router.post('/', (req, res) => {
    const newHistory = new History(req.body);
    newHistory.save(function(err){
        if(err) return err
        	console.log("success")
        res.json({ success: 'success' });
    });
});

module.exports = router;
