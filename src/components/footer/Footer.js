import classes from "./Footer.module.css"
import { Component } from 'react';

const getCurrentYear = () => {

    return new Date().getFullYear();
  };

class Footer extends Component {
    render() {
        return ( 
            <div className={classes.foottwo}>
                Copyright © {getCurrentYear()} Nelda 
            </div>
        )
    };
}
 
export default Footer;