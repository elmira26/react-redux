import React from 'react';
import p from'./ProfilePost.module.css';

export default Post;

function Post(props){
  
  return(
          <div className={p.postWrapper}>
              <div className={p.postTitle}>
                <h3 className={p.postName}>{props.name}</h3>
                <span className={p.span}>
                  <img className={p.spanLike} src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" alt="like"/> 
                  {props.likes}</span>
              </div>
              <img className={p.postImage} src={props.image} alt="postImage"/>
              <div className={p.post_1}>{props.message}</div>
          </div>
         
     
  )
}