import React from 'react'
// Icons
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
// CSS
import './topbar.css'
import { AppBar, Avatar, Badge, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => {
    return {
        topbar: {
            
        },
        appBar: {

        },
        avatar: {
            marginLeft: theme.spacing(5),
        },
        badge: {
            marginLeft: theme.spacing(1)
        }, 
        logo: {
            
        }, 
        toolbar: {
            justifyContent: 'space-between'
        }
    }
})


// function Topbar() {
//     const classes = useStyles()

//     return (
//         <div className={classes.topbar}>
//             <AppBar 
//                 position="fixed"
//                 className={classes.appBar}
//                 elevation={0}
//                 color=""
//             >
//                 <Toolbar className={classes.toolbar}>
//                     <div className="topRight">
//                         <Avatar className={classes.avatar} src="/images/team/kasra.png"/>
//                         <div className="bar-icons">
//                             <Badge className={classes.badge} badgeContent={4} color="secondary">
//                                 <NotificationsNoneIcon />
//                             </Badge>
//                             <Badge className={classes.badge} >
//                                 <LanguageIcon />
//                             </Badge>
//                             <Badge className={classes.badge} >
//                                 <SettingsIcon />
//                             </Badge>
//                         </div>
//                     </div>
//                     <div className={classes.logo}>
//                         <Typography
//                             color="textSecondary"
//                             className="dashboard-logo"
//                         >
//                         DEZIGNO
//                         </Typography>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// export default Topbar;




function Topbar() {
    const classes = useStyles()

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topRight">
                    <div className="topbar-avatar">
                        <Avatar className={classes.avatar} src=""/>
                    </div>
                    <div className="top-icons-container">
                        <div className="icon-container">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </div>
                        <div className="icon-container">
                            <Badge>
                                <LanguageIcon />
                            </Badge>
                        </div>
                        <div className="icon-container">
                            <Badge>
                                <SettingsIcon />
                            </Badge>
                        </div>
                    </div>
                </div>
                <div className="topLeft">
                    <span className="dashboard-logo">DEZIGNO</span>
                </div>
            </div>
        </div>
    )
}

export default Topbar;