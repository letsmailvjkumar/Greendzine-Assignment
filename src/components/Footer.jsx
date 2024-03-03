import React from 'react'
import { home, user } from '../assets/images'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className='flex justify-around py-2 mx-5 mt-5 border rounded-lg'>
            <div>
               <Link to = '/home'> <img src={home} alt="home" className='w-7 grayscale-0 invert bg-transparent'/></Link>
            </div>
            <div>
             <Link to ='/User'><img src={user} alt="user" className='w-7 grayscale-0 invert bg-transparent' /></Link>
            </div>
        </div>
    </>
  )
}

export default Footer