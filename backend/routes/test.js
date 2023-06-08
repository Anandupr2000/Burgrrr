import { Router } from 'express';
import { loadAllDataToDb } from '../db/loadData.js';
import { getAllProducts } from '../helpers/product-helpers.js';
var router = Router();

router.get('/', function (req, res) {
    // console.log("get request received")
    // console.log(req.body)
    res.send("get request received")
});
router.post('/', function (req, res,) {
    // console.log("post request received")
    res.send("post request received");
});
router.get('/getBurgers', async(req, res) => {
    let data = await getAllProducts()
    // res.send(JSON.stringify(data))
    res.json(data)
})
router.get('/insert-burger-data', (req, res) => {
    let data = loadAllDataToDb()
    console.log(data)
    if (data)
        res.send("<script>alert('data entered')</script>")
    else
        res.send("<script>alert('data entering failed   ')</script>")
    // res.send(JSON.stringify(db.get()))
    // console.log(db.get())
})
export default router;
