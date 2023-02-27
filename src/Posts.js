import { useEffect, useState } from "react"
import { getUserPosts } from "./apicall"
import Post from "./Post"



function Posts(){

    const [userPosts,setuserpost] = useState([])
// console.log(getUserPosts())
    useEffect(()=>{
        getUserPosts().
        then(data =>{
            console.log(data)
            setuserpost(data)
        }).catch(err=>{
            alert(err.message)
        })
    },[])


    return <div id="post-container">
        {
            userPosts.map(post=><Post key={post.id} post={post} />)
        }

    </div>
}

export default Posts