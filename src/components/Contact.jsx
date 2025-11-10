import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return(
        <>
        <div className='container contact' id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icon'
          data-aos="zoom-in-up"
            data-aos-duration="1000"
        >
            <a href='https://www.instagram.com' target='_blank' className='items'><BsInstagram className='icons'/></a>
            <a href='https://www.facebook.com' target='_blank' className='items'><CiFacebook className='icons'/></a>
            <a href='https://www.linkedin.com' target='_blank' className='items'><CiLinkedin className='icons'/></a>
            <a href='https://www.github.com' target='_blank' className='items'><FaGithub className='icons'/></a>
            <a href='https://www.gmail.com' target='_blank' className='items'><MdEmail className='icons'/></a>    
        </div>
        </div>
        </>
    )
}

export default Contact