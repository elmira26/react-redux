import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';



 const  Nav =(props)=>{
   
   let state= props.store.getState().sidebar
   
   let friendsList= state.sidebar.map(f=><Sidebar name={f.name} image={f.img} id={f.id}/>)
   
   const navLinkStyle = ({isActive})=>{
     return{
       fontWeight: isActive ? 'bold' : '400',
       textDecoration: isActive ? 'underline' : 'none',
       color: isActive ? 'violet' : 'black'   
    }
  }
 
   return(
     <div>
      <nav className="menu">
        <NavLink to="/Profile"  className={s.links} style={navLinkStyle}><div className={s.item}>Profile</div></NavLink>
        <NavLink to="/Dialogs" className={s.links} style={navLinkStyle}><div className={s.item} >Messages</div></NavLink>
        <NavLink to="/News" className={s.links} style={navLinkStyle}><div className={s.item}>News</div></NavLink>
        <NavLink to="/Music" className={s.links} style={navLinkStyle}><div className={s.item}>Music</div></NavLink>
        <NavLink to="/Users" className={s.links} style={navLinkStyle}><div className={s.item}>Users</div></NavLink>
        <NavLink to="/Settings" className={s.links} style={navLinkStyle}><div className={s.item}>Settings</div></NavLink>
      </nav> 
      <div className={s.sidebar}>
        {friendsList}
      </div>
      </div>
   )
    
 }
 
 export default Nav;