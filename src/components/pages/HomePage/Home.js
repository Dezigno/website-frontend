import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne } from './Data'

function Home() {
    return (
        <div className="home-container">
          <HeroSection {...homeObjOne}/>  
        </div>
    )
}

export default Home
