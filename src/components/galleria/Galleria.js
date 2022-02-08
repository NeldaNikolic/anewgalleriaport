import classes from "./Galleria.module.css";
import Box from "../box/Box";

const title = "";

const Galleria = () => {
    return ( 
        <div className={classes.Galleriadiv} id="galleria">
           <h2 className={classes.Galleriah1}>
                  Galleria
                  <hr/>
            </h2>
            <div  className={classes.Galleriadivtwo}>
                 <Box bigbox={title} />
            </div>
       </div>
     );
}
 
export default Galleria;