var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User ({
        firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email
    });
    user.save({user},function (err, result) {

        if (err) {
            console.log(err);
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        ;
        console.log("after errr");
        res.status(201);
        res.json({
            message: "user created",
            obj: result
        })
    })
});

module.exports = router;
