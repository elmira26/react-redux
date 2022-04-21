
import Posts from './Posts';
import { addPostActionCreator,updateNewPostTextActionCreator } from '../../data/profileReducer';
import {connect} from 'react-redux';





let mapStateToProps =(state)=>{
  
  return{
    profile: state.profile,
    newPostText: state.profile.newPostText,
    posts: state.profile.postsData
  }
  
}

let mapDispatchToProps=(dispatch)=>{
  
  return{
    updateNewPostText: (newPost)=>{
      let action =  updateNewPostTextActionCreator(newPost);
      dispatch(action);
    },
    addNewPost: ()=>{
      dispatch(addPostActionCreator());
    }
    
  }
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);
export default PostsContainer