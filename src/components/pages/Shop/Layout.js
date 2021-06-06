import clsx from 'clsx';
import React, { useState } from 'react'
import { Button, CssBaseline, IconButton, makeStyles, useTheme } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom'
import { CgShoppingBag } from 'react-icons/cg'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3),
    },
    root: {
        display: 'flex',
        backgroundColor: "#fff"
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    active: {
        background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    date: {
        flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
        marginLeft: theme.spacing(2)
    }, 
    hide: {
        display: 'none',
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    logo: {
        height: '44px'
    }, 
    tabs: {
        '& > *': {
        margin: theme.spacing(1),
        },
        flexGrow: 1
    },
    banner: {
        backgroundImage: "/public/test/bg_home_banner.png"
    }
  }
})


export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const theme = useTheme()


    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);

    const menuItems = [
    { 
        text: 'My Notes', 
        icon: <SubjectOutlined color="secondary" />, 
        path: '/' 
    },
    { 
        text: 'Create Note', 
        icon: <AddCircleOutlineOutlined color="secondary" />, 
        path: '/create' 
    },
    ];

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

    return (
        <div>
            <div className={classes.root}>
                {/* app bar */}
                {/* <CssBaseline /> */}
                <AppBar 
                    position="fixed" 
                    className={clsx(classes.appBar, {[classes.appBarShift]: open,})}
                    elevation={0}
                    color="white"
                >
                    <Toolbar>
                        {/* <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}
                            >
                            <MenuIcon />
                        </IconButton> */}
                        <IconButton>
                            <CgShoppingBag style={{color: "black"}}/>
                        </IconButton>

                        <div className="v-divider"></div>

                        <ul className={click ? 'navbar-menu menu-active' : 'navbar-menu menu-deactive'}>
                            <li className="navbar-item">
                                <Link className="navbar-links" to={`${location.pathname}/apparel`}>
                                    <div>پوشاک</div>
                                    <ArrowDropDownIcon className="navbar-link-icon"  style={{fontSize: 'small'}}/>
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="navbar-links" to={`${location.pathname}/homeware`}>
                                    <div>لوازم خانه</div>
                                    <ArrowDropDownIcon className="navbar-link-icon"  style={{fontSize: 'small'}}/>
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="navbar-links">
                                    <div>تکنولوژی</div>
                                    <ArrowDropDownIcon className="navbar-link-icon" style={{fontSize: 'small'}}/>
                                </Link>
                            </li>
                        </ul>
                        {/* <Avatar className={classes.avatar} src="/logo192.png" /> */}
                        <Link to="/shop">
                            <img src="/images/logo-test.png" alt="logo" className={classes.logo}/>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>

            {/* main content */}
            <div className="home-content">
            { children }
            </div>  
        </div>
    )
}