import axios, { Axios } from "axios"

export const getAllPosts=async()=>{
    debugger
    let posts
    posts=await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    console.log(posts);
    return posts.data;
}