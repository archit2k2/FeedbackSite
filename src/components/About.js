import React ,{ useContext,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

const About= ()=>{
    const Navigate=useNavigate();
    const context=useContext(userContext);
    const {user} = context;
    useEffect(()=>{
        if(user.email=== ' '){
            Navigate("/login");

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(

        


        <div className="container w-50">
            <h1>Taj Hotel</h1>
            <br></br>
            <h5>
            Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company 
            Limited, headquartered in Mumbai, India. Incorporated by Jamsetji Tata in 1902, the 
            company is a part of the Tata Group, one of India's largest business conglomerates. 
            The company employed over 20,000 people in the year 2010. As of 2020, the company 
            operates a total of 100 plus hotels and hotel-resorts, with 84 across India and 16 
            in other countries, including Bhutan, Malaysia, Maldives, Nepal, South Africa, Sri Lanka, 
            UAE, UK, USA and Zambia.
            </h5>
            <br></br>
            <br>
            </br>
            <h3>
                History
            </h3>
            <br></br>
            <h5>
            Jamsetji Nusserwanji Tata, founder of the Tata Group, opened the Taj Mahal Palace, 
            a hotel in Mumbai (formerly called Bombay) overlooking the Arabian Sea, on 16 December 
            1903. It was the first Taj property and the first Taj hotel. There are several anecdotal 
            stories about why Tata opened the Taj hotel. According to a story, he decided to open the 
            hotel after an incident involving racial discrimination at the Watson's Hotel in Mumbai, 
            where he was refused entry as the hotel permitted only Europeans. Hotels that accepted 
            only European guests were very common across British India then. According to another 
            story, he opened the hotel when one of his friends expressed disgust over the hotels 
            that were present in Bombay then. But a more plausible reason was advanced by Lovat Fraser, 
            a close friend of the Tata and one of the early directors of the IHCL group, that the idea 
            had long been in his mind and that he had made a study on the subject. He did not have any 
            desire to own a hotel but he wanted to attract people to India and to improve Bombay. It is 
            said that Jamsetji Tata had travelled to places like London, Paris, Berlin, and Düsseldorf to 
            arrange for materials and pieces of art, furniture and other interior decor for his hotel.
            </h5>
            <br>
            </br>
            <br></br>
            <h3>
                Notable Hotels
            </h3>
            <br></br>
            <h5>
                <ul>
                <li>
                Taj Mahal Palace Hotel, Mumbai
                </li>
                <li>
                Rambagh Palace, Jaipur
                </li>
                <li>
                Taj Lake Palace, Udaipur
                </li>
                <li>
                Falaknuma Palace, Hyderabad
                </li>
                <li>
                Taj Fisherman's Cove Resort & Spa in Chennai
                </li>
                <li>
                Usha Kiran Palace in Gwalior
                </li>
                <li>
                Taj Club House Chennai in Chennai
                </li>
                <li>
                Taj Connemara in Chennai
                </li>
                <li>
                Taj Fort Aguada Resort in Goa
                </li>
                <li>
                Taj West End in Bangalore
                </li>
                <li>
                Taj Coromandel in Chennai
                </li>
                <li>
                Umaid Bhawan Palace, Jodhpur  
                </li>
                <li>
                Taj West End in Bangalore
                </li>
                <li>
                Vivanta by Taj—Surya in Coimbatore
                </li>
                <li>
                Taj Fisherman's Cove Resort & Spa in Chennai
                </li>
                <li>
                The Pierre in New York City
                </li>
                <li>
                Taj Samudra in Colombo
                </li>
                </ul>
            </h5>
            <br></br>
            <br></br>
        </div>
        
    )
}

export default About;