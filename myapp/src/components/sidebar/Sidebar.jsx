import React from 'react';
import k from'./Sidebar.module.css';
import {NavLink} from 'react-router-dom';
export default Sidebar;

function Sidebar(props){
  
  return(
          <div className={k.friendsListBox}>
            <NavLink to={`/${props.name}/id:${props.id}`}>
              <img className={k.friendsListImage} src={props.image} alt="postImage"/>
            </NavLink>
          </div>
         
     
  )
}