import React,{useState} from "react"
import "./App.css"
import { FcRightUp2,FcRightDown2 } from "react-icons/fc";



const Data = ({mytitle,body}) => {
    const [show,setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show);
    };
    return (
        <div className= {show ? "accordion-opened":"accordion-item"} 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        
        >
            <div className="accordion-title">
            <h5>{mytitle}</h5>
          <p>{show ? <FcRightDown2 size={20}/>:<FcRightUp2 size={20}/>}</p>
            </div>
           {show && <p>{body}</p>}

        </div>
    );
};
export default Data