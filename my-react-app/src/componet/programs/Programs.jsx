import React from 'react'
import './Programs.css'
import program_1 from '../../assets/college.jpg'
import program_2 from '../../assets/prof.jpg'
import program_3 from '../../assets/certificate.jpg'

const Programs = () => {
  return (
    <div className='programs'> 
      <div className='program'>

        <img src={ program_1} alt="" className=' program_1' />
        <h3 className='program-bigtext'>National Innovative Diploma (NID)</h3>
          <p className='program-smalltext'>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
          <a href="" className='learn-more'> Learn More</a>
            <div className='underline'></div>
      </div>
      <div className='program'>

        <img src={ program_2} alt="" className='program_2' />
        <h3 className=' program-bigtext'>Professional Diploma Certificate</h3>
          <p className='program-smalltext'>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
          <a href="" className='learn-more'> Learn More</a>
            <div className='underline'></div>
      </div>
      <div className='program'>

        <img src={ program_3} alt="" className='program_3' />
        <h3 className='program-bigtext'>Certificate Program</h3>
          <p className='program-smalltext'>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
          <a href="" className='learn-more'> Learn More</a>
            <div className='underline'></div>
      </div>
    
    </div>
  )
}

export default Programs