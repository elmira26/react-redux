import React from 'react';

import p from './Profile.module.css';
const ProfileInfo=(props) => {
  return(
    <div className="profileInfo">
      <div className={`${p.profile_image} ${p.flexchild}`}>
          <img src={props.img} className={p.profile_img} alt="profile"/>
      </div>
      <div className={`${p.profile_info} ${p.flexchild}`}>
        <h2>Leonardo</h2>
        <ul>
          <li className={p.item}>{props.dateOfBirth}</li>
          <li className={p.item}>{props.city}</li>
          <li className={p.item}>{props.status}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo;