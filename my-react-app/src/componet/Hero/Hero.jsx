import React from 'react'
import './Hero.css'
import img from '../../assets/bg-header-sqi-1.png'
const Hero = () => {
  return (
    <div className='hero ,container' >
        <div className='hero-text'>
         <h1 className='center-text3'>global talent</h1>
            <h1 className='center-text1'>Study to </h1>
             <h1 className='center-text2'> become a</h1>
             
               <p className='small-text1'>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p> 
                  <button type="button" className='btn'>Start Now</button>
                  <h2 className='buttom-text'>Start here. Change the world.</h2>
            
        </div>
        <img src={img } alt="" className='img'/>
    </div>
  )
}

export default Hero

