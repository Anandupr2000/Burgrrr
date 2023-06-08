import axios from 'axios';
import Router from 'next/router';

const loginUser = async (user) => {
    console.log("Logging in user : ")
    return await axios
        .post('http://localhost:3001/login', user)
        .then(res => {
            console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
            alert("Server not found")
        })
}
const registerUser = async (user) => {
    console.log(user)
    return await axios
        .post('http://localhost:3001/register', user)
        .then(res => {
            // if (res.statusText === "OK")
            //     return alert("Server connection ok")
            // console.log(res)
            return res.data
        })
        .catch(err => {
            console.log(err)
            alert("Server not found")
        });
}

const getUser = async () => {
    return await axios
        .post('http://localhost:3001/', {
            body: "get user",
        })
        .then(res => {
            // console.log("current user is ")
            // console.log(res.data)
            let user = res.data
            if (user.isValid)
                return res.data
        })
        .catch(err => {
            console.log("Error in server connection : ")
            console.log(err.response.data)
            alert("Server not found")
        })
}
const getAllBurgers = async () => {
    return await axios
        .post('http://localhost:3001/burgers/getAll', {
            body: "get all burgers",
        })
        .then(res => {
            // console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log("Error in server connection : ")
            console.log(err)
            return err
        })
}
const addToCart = async (event) => {
    console.log(event.target.href)
    event.preventDefault()
    return await axios
        .post('http://localhost:3001/cart', {
            body: "add to user cart",
        })
        .then(res => {
            let user = res.data
            console.log(user)
            if (user.isValid)
                return res.data
            else
                Router.push('/login')
        })
        .catch(err => {
            console.log("Error in server connection : ")
            console.log(err)
            return err
        })
}
export { registerUser, loginUser, getAllBurgers, addToCart, getUser }