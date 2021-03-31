import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne } from './Data'

import '../../assets/CSS/Team.css'

function Home() {
    return (
        <>
          {/* <HeroSection {...homeObjOne}/>   */}
          <div className="banner">
              <div className="container">
                <div className="banner-header">
                    <h1 className="banner-title">
                        تیم دزیگنو  
                    </h1>
                </div>
                {/* <div className="banner-hLine-container">
                    <hr className="banner-hLine" />
                </div> */}
              </div>
          </div>
          <div className="team">
                <div className="container2">
                    <div
                        className='row team-row'
                    >
                        <div className='team-col'>
                            <div className='team-text-wrapper'>
                                <img src="images/team/navid.png" alt="CEO" className="col-item-img"/>
                                <div className="col-item-name">
                                    <p>سید نوید قاسمی</p>
                                </div>
                                <div className="col-item-title">
                                    <p>موسس و مدیر اجرایی</p>
                                </div>
                            </div>
                        </div>
                        <div className='team-col'>
                            <div className='team-text-wrapper'>
                                <img src="images/team/kasra.png" alt="CTO" className="col-item-img"/>
                                <div className="col-item-name">
                                    <p>سید کسری کرمی‌نژاد</p>
                                </div>
                                <div className="col-item-title">
                                    <p>مدیر فنی</p>
                                </div>
                            </div>
                        </div>
                        <div className='team-col'>
                            <div className='team-text-wrapper'>
                                <img src="images/team/jaber.png" alt="COO" className="col-item-img"/>
                                <div className="col-item-name">
                                    <p>جابر راشکی قلعه نو</p>
                                </div>
                                <div className="col-item-title">
                                    <p>مدیر عملیاتی</p>
                                </div>
                            </div>
                        </div>
                        <div className='team-col'>
                            <div className='team-text-wrapper'>
                                <img src="images/team/ghazale.png" alt="CMO" className="col-item-img"/>
                                <div className="col-item-name">
                                    <p>سیده غزاله سادات فاطمی</p>
                                </div>
                                <div className="col-item-title">
                                    <p>مدیر بازاریابی</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
