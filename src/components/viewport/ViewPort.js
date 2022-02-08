import "./ViewPort.module.css";
import classes from "./ViewPort.module.css"
import React, {useState}from "react";
import { AiOutlineClose } from "react-icons/ai";
import Img1 from "./../../img/img86.jpg";
import Img2 from "./../../img/img29.jpg";
import Img3 from "./../../img/img84.jpg";
import Img4 from "./../../img/img76.jpg";
import Img5 from "./../../img/img21.jpg";
import Img6 from "./../../img/img78.jpg";
import Img7 from "./../../img/img73.jpg";
import Img8 from "./../../img/img67.jpg";
import Img9 from "./../../img/img60.jpg";
import Img10 from "./../../img/img52.jpg";
import Img11 from "./../../img/img82.jpg";
import Img12 from "./../../img/img79.jpg";
import Img13 from "./../../img/img76.jpg";
import Img14 from "./../../img/img43.jpg";
import Img15 from "./../../img/img46.jpg";
import Img16 from "./../../img/img58.jpg";
import Img17 from "./../../img/img41.jpg";
import Img18 from "./../../img/img50.jpg";
import Img19 from "./../../img/img75.jpg";
import Img20 from "./../../img/img65.jpg";
import Img21 from "./../../img/img57.jpg";
import Img22 from "./../../img/img61.jpg";
import Img23 from "./../../img/img86.jpg";
import Img24 from "./../../img/img37.jpg";
import Img25 from "./../../img/img80.pg.jpg";
import Img26 from "./../../img/img53.jpg";
import Img27 from "./../../img/img10.jpg";
const ViewPort = () => {

    let data =[
       {
             id:1,
             imgSrc:Img1,
       },
       {
             id:2,
             imgSrc:Img2,
       },
       {
             id:3,
             imgSrc:Img3,
        },
        {
             id:4,
             imgSrc:Img4,
        },
        {
             id:5,
             imgSrc:Img5,
        },
        {
             id:6,
             imgSrc:Img6,
        },
        {
             id:7,
             imgSrc:Img7,
        },
        {
             id:8,
             imgSrc:Img8,
        },
        {
             id:9,
             imgSrc:Img9,
        },
        {
             id:10,
             imgSrc:Img10,
        },
        {   
             id:11,
             imgSrc:Img11,
        },
        {
             id:12,
             imgSrc:Img12,
        },
        {
             id:13,
             imgSrc:Img13,
        },
        {
             id:14,
             imgSrc:Img14,
        },
        {
             id:15,
             imgSrc:Img15,
        },
        {
             id:16,
             imgSrc:Img16,
        },
        {
             id:17,
             imgSrc:Img17,
        },
        {
             id:18,
             imgSrc:Img18,
        },
        {
             id:19,
             imgSrc:Img19,
        },
        {
             id:20,
             imgSrc:Img20,
        },
        {
             id:21,
             imgSrc:Img21,
        },
        {
             id:22,
             imgSrc:Img22,
        },
        {
             id:23,
             imgSrc:Img23,
        },
        {
             id:24,
             imgSrc:Img24,
        },
        {
             id:25,
             imgSrc:Img25,
        },
        {
            id:26,
            imgSrc:Img26,
       },
       {
        id:27,
        imgSrc:Img27,
   },
    ]
    const [model, setmadel] = useState(false);
    const [tempimgSrctwo, setTempImgSrctwo]= useState("");
    const getImg =(imgSrc) =>{
        setTempImgSrctwo(imgSrc);
        setmadel(true);
    }
   
    return(  
       <>
       <div>
       <div className={model? "model open" : classes.model}>
        <img src ={tempimgSrctwo} alt={""}/>
        <AiOutlineClose onClick={()=>setmadel(true)}/> </div>
           <div className={classes.mainpage}> 
               {data.map((item,index )=>{
                     return(
                         <div id="viewPort" className={classes.picdiv} key={index} onClick={()=>
                              getImg(item.imgSrc)}>
                              <img src={item.imgSrc} style={{width:"100%"}} alt="images"/>
                         
                         </div>
                    )
                 })}
           </div> 
           </div>
       </>
    )
}
 
export default ViewPort;