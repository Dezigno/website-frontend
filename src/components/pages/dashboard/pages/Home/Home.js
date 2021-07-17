import React from 'react'
import Chart from '../../../../chart/Chart'
import FeaturedInfo  from '../../featuredInfo/featuredInfo'
import WidgetSm from '../../widgetSm/WidgetSm';
import WidgetLg from '../../widgetLg/WidgetLg';
import "./home.css"



export default function Home() {
    const data = [
        {
          name: 'Jan',
          "supporters": 4000,
        },
        {
          name: 'Feb',
          "supporters": 3000,
        },
        {
          name: 'Mar',
          "supporters": 2000,
        },
        {
          name: 'Apr',
          "supporters": 2780,
        },
        {
          name: 'May',
          "supporters": 1890,
        },
        {
          name: 'June',
          "supporters": 2390,
        },
        {
          name: 'July',
          "supporters": 3490,
        },
        {
          name: 'Aug',
          "supporters": 1000,
        },
        {
          name: 'Sep',
          "supporters": 200,
        },
        {
          name: 'Oct',
          "supporters": 1200,
        },
        {
          name: 'Nov',
          "supporters": 4000,
        },
        {
          name: 'Dec',
          "supporters": 3100,
        },
      ];

    return (
        <div className="home-dashboard">
            <FeaturedInfo />
            <Chart title="Active users" data={data} dataKey="supporters" grid/>
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
