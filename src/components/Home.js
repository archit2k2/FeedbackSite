import {React, useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const Home= ()=>{
    const Navigate=useNavigate();
    const context=useContext(userContext);
    const {user}=context;


    useEffect(()=>{
        
        if(user.email=== ' '){
            Navigate("/login");

        }
        else if(user.email === "admin@gmail.com" && user.password==="admin admin"){
            Navigate("/Admin");
            console.log("here comes the admin");
        }
        else{
            console.log("kffect called");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
       <div className="container">
        <h1>Welcome {user.name||"random person"} </h1>
        <br></br>
        <br></br>
        <h5>
        This is Our Hotel Feedback Website for our lovely customer to help us increase our food quality, services or any other facility that you think was missing from our services. 
        </h5>
        <h5>
            Click on the "Contact us" to give a feedback.
        </h5>
        <h5>
            Click on "About" to know more about our Hotel and its services.
        </h5>
        <br></br>
        <h3>
        Thank You...
        </h3>
        </div>

    )
    
}

export default Home;