import classes from "./Box.module.css";
import Port from "../port/Port";

const Box= (props) => {
    return ( 
        <section className={classes.boxone}>
           {props.bigbox}
           <Port/>

         </section>
       
   );
}
 
export default Box;