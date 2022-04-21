import React from 'react';
import p from './Profile.module.css';
import Post from './Post';

// import { addPostActionCreator,updateNewPostTextActionCreator } from '../../data/profileReducer';

export default Posts

function Posts(props) {
  let newText = React.createRef();

  let addNewPost = (e)=>{ 
    e.preventDefault();
    props.addNewPost();
   }
  let onPostChange = ()=>{
    let newPost= newText.current.value;
    props.updateNewPostText(newPost);
    
  }
 
  let getPost = props.posts.map(p => <Post message={p.message} name={p.name} image={p.image} likes={p.likes} />)
  
 console.log(props.profile.newPostText)
  return (
    // <pre>{JSON.stringify(props,  null, 2)}</pre>
    <div>
      <h3>My posts</h3>
      <div className={p.formProfile}>
        <textarea className={p.textareaProfile} type="text"  ref={newText} value={props.profile.newPostText} onChange={onPostChange}/>
        <div className={p.btnBox}>
          <button onClick={addNewPost} className={p.button_27}>Send</button>
        </div>
      </div>
      <div className={`${p.post_block} ${p.flexchild}`}>
        {getPost}
      </div>
    </div>
  )
}