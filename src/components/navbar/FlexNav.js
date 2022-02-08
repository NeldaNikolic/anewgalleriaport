import  NavLink  from "./NavLink";
import classes from "./NavBar.module.css"

const FlexNav = () => {
    return ( 
        <nav className={classes.container}>
            <NavLink/>
        </nav>
    );
}
 
export default FlexNav;