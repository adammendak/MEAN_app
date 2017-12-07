var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function (req, res, next) {
    var Message = new Message ({
        content: req.body.content;
    });
    message.save(function (err, result) {
       if(err) {
           return res.status(500).json({
               title: 'An error occured',
               error: err
           })
       };
       res.status(201).json({
           message: 'saved message',
           obj: result
       })

    });
router.get('/', function (req, res, next) {
   Message.find()
       .exec(function (err, docs) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'success',
                obj: docs
            })
       });
});


    res.render('index');
});

module.exports = router;
