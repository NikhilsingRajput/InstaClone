import { Link } from "react-router-dom"
import Imag from "./Unplash.png"
function Home(){
    return <div className="Home-page">
    <div className="img-left">
        <img  src={Imag} alt="sample" />
    </div>
    <div className="second-child"><div>
       <h1>INSTAGRAM </h1> 
    </div>
    <Link to="/Home"><button>Enter</button> </Link>
    </div>
    </div>
}
export default Home