import { PRODUCT_COLLECTION } from "../db/collection.js"
import db from "../db/config.js"

// async () => {
//     let data = await db.get().collection("burgers").find().toArray()
//     return data
// }

const getAllProducts = async () => {
    let data = await db.get().collection(PRODUCT_COLLECTION).find().toArray()
    return data
}
export { getAllProducts }