import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
// css
import "./profile.css"


const useStyles = makeStyles(theme => {
    return {
        proPic: {
            "&:hover": {
                // backgroundColor: "rgba(128, 128, 128, 0.5)",
            },
        },
    }
})

export default function Profile() {
    const classes = useStyles()
    const [haveImage, setHaveImage] = useState(false)
    const blankAvatarPath = "/images/dashboard/profile/blank avatar.png"

    useEffect(() => {
        setHaveImage(true)
    }, [])

    
    return (
        <div className="profile">
            <div className="profile-picture-container">
                {/* <div className="proPic-title">عکس پروفایل</div> */}
                <img className={`${classes.proPic} profile-picture`} src={haveImage ? "/images/team/navid.png" : blankAvatarPath} alt="" />
            </div>
            <div className="profile-text-info">
                <div className="prop-container">
                    <span className="prop-label">نام کاربری</span>
                    <div className="probBox">Kasrakn</div>
                </div>
                <div className="prop-container">
                    <span className="prop-label">ایمیل</span>
                    <div className="probBox">Kasra@gmail.com</div>
                </div>
                <div className="prop-container">
                    <span className="prop-label">کد ملی</span>
                    <div className="probBox">9123456679</div>
                </div>
                <div className="prop-container phonePropContainer">
                    <span className="prop-label phonePropTitle">شماره موبایل</span>
                    <input type="text" className="probBox phonePropBox"></input>
                </div>
            </div>
        </div>
    )
}
