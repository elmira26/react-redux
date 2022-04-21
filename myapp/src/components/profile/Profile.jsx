import React from 'react';
import p from'./Profile.module.css';
import PostsContainer from './PostsContainer';
import ProfileInfo from './ProfileInfo';
export default Profile;

function Profile(props){
      

  return(
    //  <pre>{JSON.stringify(props.keys.postsData, null,2)}</pre>
        <div>
          <div className={p.main_img}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJywAxz6Z9hzwF0VZ3FdVkZ9o1I1_7wN72w&usqp=CAU" className={p.main_img} alt="header-img"/>
          </div>
          <div className={p.main_content}>
            <ProfileInfo img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" dateOfBirth="Date of birth: 2nd june" city="City: Kazan" status="Do my best in hiking"/>
            <PostsContainer />  
          </div>
        
      </div>
  )
}