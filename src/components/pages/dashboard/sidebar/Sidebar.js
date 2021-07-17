import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
// Icons
import { BiHomeAlt } from 'react-icons/bi'
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {GiPaintedPottery} from 'react-icons/gi'
import { FaFan } from 'react-icons/fa'
import { RiSettings3Fill, RiContactsFill } from 'react-icons/ri'
import { HiTrendingUp } from 'react-icons/hi'
import { ImHistory } from 'react-icons/im'
import { GiCash } from 'react-icons/gi'
// CSS
import './sidebar.css'


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">مشخصات</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <Link to="/dashboard/profile/" className="sidebar-list-item-link">
                                <RiContactsFill className="sidebar-icon"/> 
                                اطلاعات شخصی
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">صفحه من</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <Link to="/shop" className="sidebar-list-item-link" target="_blank">
                                <HomeIcon className="sidebar-icon"/> 
                                نمایش صفحه من
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link to="/dashboard/mypage" className="sidebar-list-item-link">
                                <RiSettings3Fill className="sidebar-icon"/> 
                                تنظیمات صفحه
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link to="/dashboard/mydesigns/" className="sidebar-list-item-link">
                                <FaFan className="sidebar-icon"/> 
                                تنظیمات طرح ها
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link to="/dashboard/myproducts/" className="sidebar-list-item-link">
                                <GiPaintedPottery className="sidebar-icon"/> 
                                محصولات من
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">اطلاعات مالی</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <Link to="/dashboard/salesinfo/" className="sidebar-list-item-link">
                                <HiTrendingUp className="sidebar-icon"/> 
                                اطلاعات فروش
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <Link to="/dashboard/widthrewlhistory/" className="sidebar-list-item-link">
                                <ImHistory className="sidebar-icon"/> 
                                تاریخچه برداشت ها
                            </Link>
                        </li>
                        <li className="sidebar-list-item">
                            <GiCash className="sidebar-icon"/> 
                            درخواست برداشت از حساب
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
