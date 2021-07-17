import React from 'react'
import Topbar from './topbar/Topbar'
import Sidebar from './sidebar/Sidebar'
import Home from './pages/Home/Home'
import Profile from "./pages/profile/Profile"
import MyProducts from "./pages/myProducts/MyProducts"
import MyDesigns from "./pages/myDesigns/MyDesigns"
import MyPage from "./pages/myPage/MyPage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// CSS
import './dashboard.css'
import Chart from '../../chart/Chart'
import SaleHistory from './pages/saleHistory/SaleHistory'
import SalesInfo from './SalesInfo/SalesInfo'

function Index() {
    return (
        <div>
            <Topbar />
            <div className="dashboard-body">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="main-contents">
                    {/* <Home /> */}
                    <Switch>
                        <Route path="/dashboard/" exact component={ Home } />
                        <Route path="/dashboard/profile/" component={ Profile } />
                        <Route path="/dashboard/myproducts/" component={ MyProducts }/>
                        <Route path="/dashboard/mydesigns/" component={ MyDesigns }  />
                        <Route path="/dashboard/mypage/" component={ MyPage }  />
                        <Route path="/dashboard/widthrewlhistory/" component={SaleHistory} />
                        <Route path="/dashboard/salesinfo/" component={SalesInfo} />
                        {/* <Route path="/dashboard" component={  } /> */}
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Index;