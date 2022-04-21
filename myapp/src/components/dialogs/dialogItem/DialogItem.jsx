import React from 'react';
import a from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import d from "./DialogItem.module.css";

const DialogItem=(props)=>{
  
  return(
    <div className={a.dialog + " "+ a.active}>
      <img src={props.image} alt="dialogImage" className={d.dialogImage} />
      <NavLink to={"/dialogs/" + props.id} className={d.dialogLink}>{props.name}</NavLink>
    </div> 
  )
}


export default DialogItem