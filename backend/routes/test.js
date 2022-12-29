var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    // console.log("get request received")
    // console.log(req.body)
    res.send("get request received")
});
router.post('/', function (req, res, ) {
    // console.log("post request received")
    res.send("post request received");
});

module.exports = router;
