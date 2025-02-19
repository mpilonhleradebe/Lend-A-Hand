import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const msg ='Your booking has been sucessfully completed and your will receive email confirmation shortly'


function alertUser(){
    window.alert('Waiting for the home page')
}

const Confirmation = () => {
  return (
    <div className='Confirmation'>
       <h1>All Done</h1>
       <img src='https://img.freepik.com/free-vector/appointment-booking-mobile-concept_23-2148570788.jpg?size=626&ext=jpg&ga=GA1.2.2018438666.1728131989&semt=ais_hybrid'/>
       <p>Your booking has been successfully completed and <br></br>confirmation has been sent to your email</p>
       <div className="connect">
        <ul>
            <p>Lets connect</p>
            <li><FaInstagram size={30}/></li>
            <li> <FaLinkedin size={30} /> </li>
            <li> <FaTwitter size={30} /> </li>
        </ul>
       </div>
       <Link to={'/'}>
       <button id='confirm-btn' onClick={alertUser}>Continue browsing</button>
       </Link>
    </div>
  ) 
}

export default Confirmation