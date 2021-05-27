const express = require('express');
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId;

const Test = require('../../models/Test.js');

let router = express.Router();

router.get('/', (req, res) => {
    Test.find({}, (err, tests) => {
        res.json({ tests });
    })
});

router.post('/', (req, res) => {
    const newtest = new Test(req.body);
    newtest.save(function(err){
        if(err) return err
        res.json({ success: 'success' });
    });
});

module.exports = router;
