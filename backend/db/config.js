import { MongoClient } from 'mongodb'
const state = {
    db: null
}
async function connect() {
    //     // const url = 'mongodb://localhost:27017'
    const pass = 123
    let dbname = 'burger'
    const url = `mongodb+srv://anonymous_:${pass}@cluster0.7xuld.mongodb.net/`
    const client = new MongoClient(url);
    await client.connect()
        .then(() => {
            state.db = client.db(dbname)
            console.log("database connection sucessfull")
        })
        .catch(err => {
            console.log("database connection failed")
            console.log(err)
        })
}

function get() { return state.db }

export default { connect, get,}

