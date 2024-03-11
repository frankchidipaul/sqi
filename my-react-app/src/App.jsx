import React from 'react'
import Navbar from './componet/Navbar/Navbar'
import Hero from './componet/Hero/Hero'
import Programs from './componet/programs/Programs'
import Duration from './componet/Duration/Duration'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <Programs/>
       <Duration/>
    </div>
  )
}

export default App