import {motion} from "framer-motion"
import classes from "./Home.module.css"
import code from "./../../img/galleriasix.jpg"
import codetwo from "./../../img/gallerianight.jpg"
import Button from "../button/Button"





const Home = (props) => {

   const animatehome = {opacity: 0, y:-40}
   const animatinghome = {opacity: 1, y:0}
   const titleshome = {opacity: 0, y:20}
    
    return ( 
      
     <motion.div  
         initial={animatehome}
         animate={animatinghome}
         className={classes.Home}
      >
         <motion.div animate={titleshome}  animate={animatinghome}className={classes.Hello}>
            <h1>Galleria Port</h1>
         </motion.div>
         <div className={classes.container}>
               <p>
                  <hr/>
                     Expressions of the visual communication of photography 
                     has distinct aesthetic capacity beyond the imaginative views.
                     In order to comprehend the artists aspect, one must first objectively 
                     analyses and evaluate the study’s of the characteristics of the process of art itself. 
               </p>
               <hr/>
               <p>
                  Enjoy in breathtaking pictures that’s provided by Galleria Port professional artists/ 
                  photographers . 
                  This portal was created for all lovers of outdoor scenic views .
                  Try not fall in love with this magnificent photographs of our planet earth. 
                  Any outside upload of your art creation are more then welcome to be Emailed. 
                  Thank you from the Galleria team. 
               </p>
           </div>
           <img className={classes.codetwo} src={codetwo} alt="code"></img>
           <img className={classes.code} src={code} alt="code"></img>
           <Button/>
      </motion.div>
     );
}

export default Home;
