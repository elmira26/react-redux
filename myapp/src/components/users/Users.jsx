import React from 'react';
import a from './Users.module.css'

const Users =(props)=>{
  console.log(props)
  return(
  <div>
    here about users 
    <div className={a.wrapper}>
      {props.users.users.map(u=>(<div className={a.item} key={u.id}>
       
        <div className={a.imageBox}>
          <img className={a.image} src={u.img} alt="id picture" />
        </div>
        <div className={a.buttonBox}>
         {u.followed
         ?<button onClick={()=>{props.unfollow(u.id)}}>Follow</button>
         :<button onClick={()=>{props.follow(u.id)}}>Unfollow</button>}
        </div>
        <div className={a.content}>
          <div className={a.name}> {u.name}</div>
          <div className={a.status}>Status:{u.status}</div>
        </div>
        <div className={a.content_location}>
          <div className={a.country}>{u.location.country}</div>
          <div className={a.city}>{u.location.city}</div>
        </div>
      </div>))}
    </div>
  </div>)
}

export default Users