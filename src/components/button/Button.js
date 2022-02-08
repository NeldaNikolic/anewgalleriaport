import classes from "./Button.module.css"

const Button = () => {
   return(
    
     <div>
       <a href="/#About">
        <button
          className={classes.buttonone}>History
        </button>
        
      </a>
      
      <a href="/#viewPort">
        <button
          className={classes.buttontwo} >View
        
        </button>
      </a>
      
      <a href="/#contact">
        <button 
          className={classes.buttonthree}>Email 
        </button>
      </a>

    </div>
      
  )
    
}
     
export default Button;