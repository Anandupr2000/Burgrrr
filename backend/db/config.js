const mongoClient = require('mongodb').MongoClient
const state = {
    db: null
}
module.exports.connect = function (done) {
    // const url = 'mongodb://localhost:27017'
    const pass = 123
    dbname = 'burger'
    const url = `mongodb+srv://anonymous_:${pass}@cluster0.7xuld.mongodb.net/`
    mongoClient.connect(url)
        .then((res) => {
            state.db = res.db(dbname)
            // console.log(state.db)
            console.log("database connection sucessfull")
            // console.log(res)
            // if (err) return done(err)    // returning error object on failed connection to called line through callback
            // state.db = data.db(dbname)
        })
        .catch(err => {
            console.log("database connection sucessfull")
            console.log(err)
        })
}

module.exports.get = () => { return state.db }