import { useState } from "react";
import Axios from "axios"

function Newpost(){
//     const url = "" ;
//     const [data , setdata] = useState({
//             "name":"Nick",
//             "location":"",
//             "description": "",
//             "PostImage": "",
//             "date" : "new date()"
//     })

//     function submit(e){
//         e.preventDefault();
//         Axios.post(url,{
//             name: data.name,
//             location: data.location,
//             likes:0,
//             description: data.description,
//             PostImage:data.PostImage,
//             data:data.date

//         }).then((res)=>{
//             console.log(res.data)
//         })
//     }

//     function handle(e){
//         const newdata = { ...data}
//         newdata[e.target.id] = e.target.value
//         setdata(newdata)
//         console.log(newdata)
//     }


    return <form onSubmit={(e)=>{submit(e)}} >
        <div >
        <input onChange={(e)=>handle(e)} id="PostImage" type="text" required />
        </div>
        <div >
            <input onChange={(e)=>handle(e)} id="name" type="text" placeholder="Author" required/>
            <span>
             <input onChange={(e)=>handle(e)} id="location" type="text" placeholder="Location" required/>
            </span>
        </div>
        
        <div>
            <input type="text" onChange={(e)=>handle(e)} id="description" placeholder="Description" required/>

        </div>
        <button type="submit">Post</button>
        
    </form>
}
export {
    Newpost
}