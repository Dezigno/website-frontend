import React from 'react'
import "./featuredInfo.css"
// Icons
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"


export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">درآمد ماهانه</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">11240 تومان</span>
                    <span className="featuredMoneyRate">
                    -3.15
                        <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">دنبال کننده ها</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">122</span>
                    <span className="featuredMoneyRate">
                    -3.15
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">تعداد محصولات فروخته شدهه</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1020</span>
                    <span className="featuredMoneyRate">-
                    3.15
                        <ArrowUpward className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">compare to last month</span>
            </div>
        </div>
    )
}
