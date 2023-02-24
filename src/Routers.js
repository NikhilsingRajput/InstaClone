import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "./Home"
import Instaclone from "./Instaclone"
import Api from "./apitest"
import { Newpost } from "./Newpost"

function Routers(){
    return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Instaclone />} />
        <Route path="/newpost" element={<Newpost/>} />
        
    </Routes>
    </BrowserRouter>
}

export default Routers