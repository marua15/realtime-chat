import React from 'react'
import Featured from '../../components/featured/Featured'
import Pricing from '../../components/pricing/Pricing'
import About from '../../components/about/About'


import "./Home.scss"

const home = () => {
  return (
    <div className='home'>
      
      <Featured/>
      <Pricing/>
      <About />

   
<br/>
    </div>
  )
}

export default home