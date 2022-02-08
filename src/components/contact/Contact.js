import classes from "./Contact.module.css";
import { FaEnvelopeOpen,FaHome} from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import {GiSmartphone } from "react-icons/gi";
const Contact= () => {
    return ( 
        <>
      
        <div className={classes.Galleriadiv} >
          <a className={classes.faicon} href="#contact">
           <GiSmartphone/>
          </a> 
          <a className={classes.faicon} href="/#contact">   
             <FaEnvelopeOpen/>
          </a>   
          <a className={classes.faicon} href="/#viewPort">
             <ImTruck/>
          </a>   
          <a className={classes.faicon} href="/">
             <FaHome/>
          </a>   
       
         </div>
       </>
     );
}
 
export default Contact;