import React from 'react'
// Icons
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import { BiHomeAlt } from 'react-icons/bi'
import {GiPaintedPottery} from 'react-icons/gi'
// CSS
import './topbar.css'
// Material ui
import { AppBar, Avatar, Badge, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';


const useStyles = makeStyles(theme => {
    return {
        avatar: {
            marginRight: theme.spacing(2),
        }
    }
})

function Topbar() {
    const classes = useStyles()

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="dashboard-logo">DEZIGNO</span>
                </div>
                <div className="topLeft">
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
                    <div className="topbar-avatar">
                        <Avatar className={classes.avatar} src=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;









// const drawerWidth = 240

// const useStyles = makeStyles(theme => {
    //     return {
        //         topbar: {
            
            //         },
//         appBar: {

//         },
//         avatar: {
//             marginLeft: theme.spacing(5),
//         },
//         badge: {
//             marginLeft: theme.spacing(1)
//         }, 
//         logo: {
            
//         }, 
//         toolbar: {
//             justifyContent: 'space-between'
//         },
//         drawer: {
//             width: `${drawerWidth}px`
//         },
//         drawerPaper: {
//             width: `${drawerWidth}px`
//         },
//         title: {
//             padding: theme.spacing(2)
//         }, 
//         active: {
//             background: '#f4f4f4'
//         }, 
//         listItemText: {
//             textAlign: 'start',
//             alignContent: 'center'
//         }, 
//         listItemIcon: {
//             textAlign: 'end'
//         }
//     }
// })


// function Topbar() {
//     const classes = useStyles()
//     const history = useHistory()
//     const location = useLocation()

//     const menuItems = [
//         { 
//           text: 'صفحه من', 
//           icon: <BiHomeAlt color="#6d1b7b" />, 
//           path: '/page' 
//         },
//         { 
//           text: 'طرح های من', 
//           icon: <GiPaintedPottery color="#6d1b7b" />, 
//           path: '/mydesigns' 
//         },
//       ];

//     return (
//         <div className={classes.topbar}>
//             <AppBar 
//                 position="fixed"
//                 className={classes.appBar}
//                 // elevation={0}
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
//             <Drawer
//                 variant="permanent"
//                 className={classes.drawer}
//                 classes={{paper: classes.drawerPaper}}
//                 anchor="right"
//             >
//                 <div>
//                     <Typography variant="h5" className={classes.title}>
//                         DEZIGNO
//                     </Typography>
//                 </div>
//                 <List>
//                     {menuItems.map((item) => (
//                         <ListItem
//                             button
//                             key={item.text}
//                             onClick={() => {history.push(item.path)}}
//                             className={location.pathname == item.path ? classes.active : null}
//                         >
//                             <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
//                             <ListItemText className={classes.listItemText} primary={item.text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//         </div>
//     )
// }

// export default Topbar;



