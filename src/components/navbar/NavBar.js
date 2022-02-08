import classes from "./NavBar.module.css"
import FlexNav from "./FlexNav";
import MobilNav from "./MobilNav";

const NavBar = () => {

    return (
        <div className={classes.NavBar}>
           <FlexNav/>
           <MobilNav/>
        </div>
      );
}
 
export default NavBar;
