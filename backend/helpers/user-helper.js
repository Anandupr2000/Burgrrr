import { USER_COLLECTION } from "../db/collection.js"
import db from "../db/config.js"
import bcrypt from 'bcrypt';

const findUser = async (id) => {
    let user = await db.get().collection(USER_COLLECTION).find({ email: id }).toArray()
    return user
}
const registerUser = async (user) => {
    user["createdAt"] = new Date()
    let response = {}
    await findUser(user.email)
        .then(async res => {
            /**
             * Encrypting user password and resulting hash of length=10 is stored in database
             */
            // wait untill hash value is produced
            user.password = await bcrypt.hash(user.password, 10)
            if (res.length > 0)
                response.message = "User found, registration failed"
            else
                // here user account is stored with encrypted password
                await db.get().collection(USER_COLLECTION).insertOne(user)
                    .then(res => {
                        response.message = "User registered successfully"
                    })
                    .catch(err => {
                        console.log("Failed to register user, insertion failed")
                        console.log(err)
                        response.error = "Failed to register user, insertion failed"
                    })
        })
        .catch(err => {
            console.log("Failed to find user")
            console.log(err)
            response.error = "Failed to find user"
        })
    console.log(response)
    return response
}
const doLogin = async (user) => {
    let response = {}
    let usr = null
    await findUser(user.email)
        .then(async userArr => {
            if (userArr.length > 0) {
                usr = userArr[0]
                // console.log(usr)
                // console.log(user)
                // if (user.password === usr.password)
                //     console.log("Password match")
                console.log("comparing : ",user.password," ,",usr.password)
                // passing user entered pwd and has hash @ db
                await bcrypt.compare(user.password, usr.password)
                    .then(status => {
                        if (status) {
                            console.log("Preparing response")
                            response.status = status
                            response.user = {
                                uname: usr.uname,
                                email: usr.email,
                                phoneNo: usr.phoneNo,
                            }
                            response.message = "Login success"
                        }
                    })
            }
            else {
                response.error = "User not found, register userself"
            }
        })
    console.log(response)
    return response
}
export { registerUser, doLogin }