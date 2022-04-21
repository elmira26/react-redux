const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
            newPostText:'',
            postsData:[
              {message:"here some text", id:1, name:"Alex", image:"https://www.w3schools.com/w3images/team2.jpg", likes: 12},
              {message:"some another text for post", id:2, name:"Frida", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jan_Chabr_profile_pic.jpg/800px-Jan_Chabr_profile_pic.jpg", likes: 12},
              {message:"new additional message for post3", id:3,name:"Jerry", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_ZbduoivXF84oGeklgcNgttJIH_t3sJ2Yg&usqp=CAU", likes: 5}],
            }
const profileReducer = (state=initialState,action)=>{
 
   switch(action.type){
      case ADD_POST:
            let newPost = {
            name: 'Luis',
            id: 5, 
            image:'https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            likes: 0,
            message: state.newPostText
            };
            return{...state,
            postsData:[...state.postsData,newPost],
            newPostText:''
            };
        case UPDATE_NEW_POST_TEXT:
            return{...state,
            newPostText:action.newText,
            }
         default: return state;
   }
}
export const addPostActionCreator=()=>{
  return {type: ADD_POST}
}
export const updateNewPostTextActionCreator =(newPost)=>{
  return {type:UPDATE_NEW_POST_TEXT, newText: newPost}
}
export default profileReducer;