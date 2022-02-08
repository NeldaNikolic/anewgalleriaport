import React from 'react';
import classes from  "./modal.module.css"
import { AiOutlineClose } from "react-icons/ai";
import reactDom from 'react-dom';

export default function modal({open, children, onclose}) {
    if (!open) return null
  return reactDom.createPortal(
    <>
    <div className={classes.divmodalportaloverlay} >
    <div className={classes.modalButton}>
    <AiOutlineClose onClick={() => onclose(false)}>
        Close View Port
    </AiOutlineClose>
       {children}
    </div>
    </div>
    </>,
         document.getElementById("portal")
    );
    
  }

