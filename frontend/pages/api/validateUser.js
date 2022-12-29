import axios from 'axios';

const isServerAvailable = async () => {
    let res =  await axios
        .post('http://localhost:3001/test',{
            body:"post request"
        })
        .then(res => {
            console.log(res.data)
            return res
        })
        .catch(err=>{
            console.log("Error in server connection : ")
            console.log(err)
            return false
        })
    return res
}

export { isServerAvailable }