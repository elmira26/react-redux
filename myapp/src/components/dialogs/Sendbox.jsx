import React from 'react';
import a from './Dialogs.module.css';
// import { addMessageCreator, onChangeCreator } from '../../data/dialogsReducer';

const Sendbox=(props)=>{
  
 console.log(props)
 let onChangeMessage = (e)=>{
   let onchange = e.target.value
   props.onChangeMessage(onchange);
 };
 let addMyMessage =()=>{
   props.addMyMessage();
 
   
 };
  return(
<div className={a.formDialog}> 
  <textarea className={a.textareaDialog}  type="text"  onChange={onChangeMessage} value={props.newMessageBody}></textarea> 
  <div className={a.dialogBtnBox}>
    <button onClick={addMyMessage} className={a.dialogBtn}>Send</button>
  </div>
</div>   
  )
}
export default Sendbox;
