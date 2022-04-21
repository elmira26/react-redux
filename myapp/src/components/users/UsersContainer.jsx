import { connect } from "react-redux";
import Users from "./Users";
import {followCreator, unfollowCreator, setUsersCreator} from '../../data/usersReducer';

let mapStateToProps =(state)=>{
  return{
    users: state.usersPage
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    follow: (userId)=>{
      dispatch(followCreator(userId))
    
    },
    unfollow:(userId)=>{
      dispatch(unfollowCreator(userId))
    },
    setUsers:(users)=>{
      dispatch(setUsersCreator(users))
    }
  }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)



export default UsersContainer