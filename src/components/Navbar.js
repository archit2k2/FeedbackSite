import { React,useContext } from "react"
import {Link, useNavigate} from "react-router-dom"
import userContext from "../context/userContext"

const Navbar = () => {
    const Navigate=useNavigate();
    const context=useContext(userContext);
    const {addUser} = context;
    return (
        <div>
            <div className="container-fluid">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-dark navbar-expand">
                    <Link to="/" className="d-flex align-items-center mb-4 mb-md-0 me-md-auto text-light text-decoration-none">
                        <span className="fs-1 ">Hotel Feedback</span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/"  className="nav-link active" aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><button onClick={()=>{
                            addUser(""," ","");
                            Navigate("/login")

                        }} className="nav-link">Sign-Out</button></li>
                       
                    </ul>
                </header>
            </div>
        </div> 
    )
}

export default Navbar;