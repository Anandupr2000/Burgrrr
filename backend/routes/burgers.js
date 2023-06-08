import { Router } from 'express';
import { getAllProducts } from '../helpers/product-helpers.js';
var router = Router();

router.post('/getAll', async (req, res) => {
    let data = await getAllProducts()
    // console.log(data)
    res.json(data)
})
export default router;