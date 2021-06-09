import React from 'react'
import HeroSection from '../HeroSection'
import { homeObjOne, homeObjTwo } from './Data'

function Home() {
    return (
        <div className="home-container">
          <HeroSection {...homeObjOne}/>  
          <HeroSection {...homeObjTwo}/>
        </div>
    )
}

export default Home
