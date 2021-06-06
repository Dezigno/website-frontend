import react, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import { VscMenu, VscRemove} from 'react-icons/vsc'
import { GoKebabHorizontal } from 'react-icons/go'
import RemoveIcon from '@material-ui/icons/Remove';
import { CgShoppingBag } from 'react-icons/cg'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//material ui components
import { IconButton, makeStyles } from '@material-ui/core';
// CSS
import './navbar.css'


const useStyles = makeStyles((theme) => {
    return {
        logo: {
            height: '45px',
            flexGrow: 1
        }, 
        tabIcon: {
            display: 'none'
        }
    }
})

function Navbar() {
    const classes = useStyles()
    const location = useLocation()

    // state variables
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar-shop">
                <div className="menu-icon-shop" onClick={handleClick}>
                    {click ? <VscMenu className="menu-icon-close" style={{fontSize: '2.5rem'}}/> : <VscRemove className="menu-icon-open" style={{fontSize: '2.5rem'}}/>}
                </div>
                <div className="navbar-container-shop container-shop">
                    <div className="shop-logo">
                        <Link to="/shop">
                            <img src="/images/logo-test.png" alt="logo" className={classes.logo}/>
                        </Link>
                    </div>
                    <ul className={click ? 'navbar-menu active' : 'navbar-menu deactive'}>
                        <li className="nabar-item">
                            <Link
                                to={`${location.pathname}/apparel`}
                                className='navbar-links'
                                onClick={closeMobileMenu}
                            >
                                <p className="navbar-link-text">پوشاک</p>
                                <ArrowDropDownIcon className={click ? "navbar-link-icon" : `navbar-link-icon ${classes.tabIcon}`}  style={{fontSize: 'small'}}/>
                            </Link>
                        </li>
                        <li className="nabar-item">
                            <Link
                                to={`${location.pathname}/homeware`}
                                className='navbar-links'
                                onClick={closeMobileMenu}
                            >
                                <p className="navbar-link-text">لوازم خانه</p>
                                <ArrowDropDownIcon className={click ? "navbar-link-icon" : `navbar-link-icon ${classes.tabIcon}`}  style={{fontSize: 'small'}}/>
                            </Link>
                        </li>
                        <li className="nabar-item">
                            <Link
                                to={`${location.pathname}/accessories`}
                                className='navbar-links'
                                onClick={closeMobileMenu}
                            >
                                <p className="navbar-link-text">لوازم تزئینی</p>
                                <ArrowDropDownIcon className={click ? "navbar-link-icon" :`navbar-link-icon ${classes.tabIcon}`}  style={{fontSize: 'small'}}/>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="v-divider"></div>
                <div className="cart-icon">
                    <IconButton >
                        <CgShoppingBag style={{color: "black"}}/>
                    </IconButton>
                </div>
            </nav>  
        </div>
    );
}


export default Navbar;