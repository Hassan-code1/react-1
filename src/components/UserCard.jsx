import React from 'react'
import './UserCard.css'
import image from '../assets/demo-image.jpg'
const UserCard = (props) => {
  return (
    <div className='user-container'>
        <img className='user-image' src={image} alt='User Avatar' />
        <p className='user-name'>{props.name}</p>
        <p className='user-desc'>{props.description}</p>
    </div>
  )
}

export default UserCard;
