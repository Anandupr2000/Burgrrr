import db from './config.js';
import burgers from './Burgerdata.js';

const loadAllDataToDb =
    async () => {
        console.log(burgers[0])
        await db.get().collection("burgers").insertMany(burgers)
            .then(
                () => { 
                    console.log("data entered")
                    return (true) 
                })
            .catch((err) => { return (err) })
    }

export { loadAllDataToDb }