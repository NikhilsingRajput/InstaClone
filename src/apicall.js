import React from "react"
import axios from "axios"

 function getUserPosts() {
    console.log("in")
    return  axios.get('https://instaapi-0odt.onrender.com/data')
        .then(res => {
            if(res.status === 200 && res.data){
                console.log("ok")
                return res.data
            }
            throw new Error('Not able to fetch posts')
        })
}

export {
    getUserPosts
}