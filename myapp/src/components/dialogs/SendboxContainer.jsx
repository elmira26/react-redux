
import Sendbox from './Sendbox';
import {connect} from 'react-redux'
import { addMessageCreator, onChangeCreator } from '../../data/dialogsReducer';


let mapStateToProps =(state)=>{
console.log(state.dialogs.currentValue)
  return{
    dialogs: state.dialogs,
    newMessageBody: state.dialogs.currentValue
  }
  
}
let mapDispatchToProps = (dispatch)=>{
  return{
    onChangeMessage:(onchange)=>{
      let action = onChangeCreator(onchange)
      dispatch(action);
    },
    addMyMessage:()=>{
      dispatch(addMessageCreator());
    }
  }
}
const SendboxContainer = connect(mapStateToProps,mapDispatchToProps)(Sendbox); 
export default SendboxContainer;
