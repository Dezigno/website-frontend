import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
// css
import "./myPage.css"


const useStyles = makeStyles(theme => {
    return {
        proPic: {
            "&:hover": {
                // backgroundColor: "rgba(128, 128, 128, 0.5)",
            },
        },
    }
})

export default function MyPage() {
    const classes = useStyles()
    const [haveImage, setHaveImage] = useState(false)
    const blankAvatarPath = "/images/dashboard/profile/blank avatar.png"

    useEffect(() => {
        setHaveImage(true)
    }, [])

    
    return (
        <div className="myPage">
            <div className="myPage-logo-container">
                {/* <div className="proPic-title">عکس پروفایل</div> */}
                <img className={`${classes.proPic} myPage-logo`} src={haveImage ? "/images/team/navid.png" : blankAvatarPath} alt="" />
            </div>
            <div className="myPage-name">
                <div className="myPage-prop-container">
                    <span className="prop-label">نام پیج</span>
                    <div className="probBox">Kasrakn</div>
                </div>
                <div className="myPage-prop-container">
                    <span className="prop-label">آدرس پیج</span>
                    <div className="probBox">dezigno</div>
                </div>
                <div className="myPage-prop-container">
                    <span className="prop-label">لینک اکانت توییتر </span>
                    <input type="text" className="probBox phonePropBox"></input>
                </div>
                <div className="myPage-prop-container">
                    <span className="prop-label">لینک اکانت اینستاگرام </span>
                    <input type="text" className="probBox phonePropBox"></input>
                </div>
                <div className="myPage-prop-container">
                    <span className="prop-label">لینک اکانت یوتیوب </span>
                    <input type="text" className="probBox phonePropBox"></input>
                </div>
                <div className="myPage-prop-container">
                    <span className="prop-label">لینک اکانت فیسبوک </span>
                    <input type="text" className="probBox phonePropBox"></input>
                </div>

            </div>
        </div>
    )
}
