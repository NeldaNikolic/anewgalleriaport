import classes from "./PageHeader.module.css"
import { Component } from 'react';


class PageHeader extends Component {
    render() {
        return ( 
            <div className={classes.About}>
               <div className={classes.container} >
                  <h2>Inpsarations on galleria port </h2>
                  <hr/>
                </div>
            </div>
        )
    };
}
 
export default PageHeader;