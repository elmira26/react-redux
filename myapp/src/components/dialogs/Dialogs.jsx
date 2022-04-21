import React from 'react';
import a from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Sendbox from "./Sendbox";
import Message from "./message/Message";
import SendboxContainer from './SendboxContainer';




const Dialogs = (props)=>{
   

  console.log(props.dialogs);
  let dialogMessages = props.dialogs.mesData.map(m=> <Message text={m.message} key={m.id} id={m.id}/>)
  
  let dialogElements = props.dialogs.data.map(dialog=> <DialogItem key={dialog.id} id={dialog.id} image={dialog.img} name={dialog.name}/>)
   return(
     
    //  <pre>{JSON.stringify(props.updateMessage, null,2)}</pre>
      <div className={a.dialogs}>   
        <div className={a.dialogsItems}>
          {dialogElements}
        </div>
      <div className={a.messages}>
        <div className={a.messagesNav}>
          some heading here
        </div>
        <div className={a.messagesContent}>
          {dialogMessages}  
        </div>
        <div className={a.messagesSendbox}>
          <SendboxContainer />
        </div>
      </div>
    </div> 
   )
 }



export default Dialogs