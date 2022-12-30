var burgers = require('../db/Burgerdata')
var db = require('../db/config')
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    // console.log("get request received")
    // console.log(req.body)
    res.send("get request received")
});
router.post('/', function (req, res,) {
    // console.log("post request received")
    res.send("post request received");
});
router.get('/insert-burger-data', async (req, res) => {
    console.log(burgers[0])
    await db.get().collection("burgers").insertOne({
        name: "dummy",
        price: 1
    })
    res.send("<script>alert('data entered')</script>")
    // res.send(JSON.stringify(db.get()))
    // console.log(db.get())
})
module.exports = router;
