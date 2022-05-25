import axios, { Axios } from "axios"

export const getAllUsers=async()=>{
    let users
    users=await axios.get(`https://jsonplaceholder.typicode.com/users`)
    console.log(users);
    return users.data;
}