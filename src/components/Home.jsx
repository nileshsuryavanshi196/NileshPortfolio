import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'


const Home = () => {
    const typeRef = useRef(null)
    useEffect(() => {
        const options = {
            strings: ["Welcome To My Profile","I'm Nilesh Suryavanshi","I'm Full Stack Developer" ],
            typeSpeed: 50,
            backSpeed: 50,
            loop:true
        }
        const typed = new Typed(typeRef.current, options)
        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <>
        <div className='container home' id='home'>
            <div className='left' 
            data-aos="fade-up-right"
            data-aos-duration="1000"
            >
            <h1 ref={typeRef}>Software Developer. 
                Veniam dolores eius sunt.</h1>
            <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning my-3'>Download Resume</a>
            </div>
            <div className='right'
            data-aos="fade-up-left"
            data-aos-duration="1000"
            >
               <div className='img'>
                <img src={`/assets/${hero.imgSrc}`} alt="hero" />
               </div>
            </div>
        </div>
        </>
    )
}

export default Home