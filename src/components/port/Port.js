import React, { useState } from "react";
import classes from "./Port.module.css";
import Img1 from "./../../img/img86.jpg";
import Img2 from "./../../img/img47.jpg";
import Img3 from "./../../img/img72.jpg";
import Img5 from "./../../img/img44.jpg";
import Img6 from "./../../img/img43.jpg";
import Img7 from "./../../img/img62.jpg";
import Img8 from "./../../img/img24.jpg";

const Port = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
  ];
  const [model, setmadel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setmadel(true);
  };
  const [isOpen, setOpend] = useState(false);

  /* <div className={model? "model open" : "model"}>
        <img src ={tempimgSrc} alt={""}/>
        <AiOutlineClose onClick={()=>setmadel(true)}/> </div> */

  return (
    <>
      <div className={classes.styleimg}>
        {data.map((item, index) => {
          return (
            <div className={classes.picstyle} key={index}>
              <a href="/view-port">
                <img
                  src={item.imgSrc}
                  style={{ width: "97%" }}
                  onClick={() => setOpend(true)}
                  alt="images"
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Port;
