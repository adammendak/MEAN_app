const express = require('express');
const router = express.Router();

router.get('/message', function (req, res, next) {
    res.render('message');
});

router.get('/message/:msg', function (req, res, next) {
    res.render('message', {message: req.params.msg});
});

router.post('/message', (req,res) => {
    let message = req.body.message;
    res.redirect('/message/' + message );
})

module.exports = router;
