
 import React, { useEffect } from 'react';
import axios from "axios";

 function Api() {

// useEffect(()=>{
//       axios.get("https://instaapi-0odt.onrender.com/data")
//       .then((res)=>
//       console.log("dta", res.data))
// },[])

// using Asyic
const getApiData =async () => {
      const res = await axios.get("http://localhost:3001/data");
      console.log(res.data)
}
useEffect(()=>{
      getApiData();
},[])


 return <div>
       
          Hello Axios
          
       </div>
 }
 
 export default Api;
 