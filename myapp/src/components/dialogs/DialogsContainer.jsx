
import a from './Dialogs.module.css';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

 let mapStateToProps =(state)=>{
console.log(state)
  return{
    dialogs: state.dialogs,
    newMessageBody: state.dialogs.currentValue
  }
  
}
const DialogsContainer = connect(mapStateToProps)(Dialogs); 

export default DialogsContainer;