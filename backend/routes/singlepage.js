var express = require('express');
var router = express.Router();

router.get('*', function(req, res) {
    res.render('singlepage');
});

module.exports = router;
