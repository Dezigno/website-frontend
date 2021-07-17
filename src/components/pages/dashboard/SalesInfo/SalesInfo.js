import React from 'react'
import Chart from '../../../chart/Chart';

export default function SalesInfo() {

    const data = [
        {
          name: 'Jan',
          "sales": 4000,
        },
        {
          name: 'Feb',
          "sales": 3000,
        },
        {
          name: 'Mar',
          "sales": 2000,
        },
        {
          name: 'Apr',
          "sales": 2780,
        },
        {
          name: 'May',
          "sales": 1890,
        },
        {
          name: 'June',
          "sales": 2390,
        },
        {
          name: 'July',
          "sales": 3490,
        },
        {
          name: 'Aug',
          "sales": 1000,
        },
        {
          name: 'Sep',
          "sales": 200,
        },
        {
          name: 'Oct',
          "sales": 1200,
        },
        {
          name: 'Nov',
          "sales": 4000,
        },
        {
          name: 'Dec',
          "sales": 3100,
        },
      ];

      const data2 = [
        {
          name: '1',
          "sales": 4000,
        },
        {
          name: '2',
          "sales": 3000,
        },
        {
          name: '3',
          "sales": 2000,
        },
        {
          name: '4',
          "sales": 2780,
        },
        {
          name: '5',
          "sales": 1890,
        },
        {
          name: '5',
          "sales": 2390,
        },
        {
          name: '7',
          "sales": 3490,
        },
        {
          name: '8',
          "sales": 1000,
        },
        {
          name: '9',
          "sales": 200,
        },
        {
          name: '10',
          "sales": 1200,
        },
        {
          name: '11',
          "sales": 4000,
        },
        {
          name: '12',
          "sales": 3100,
        },
        {
            name: '13',
            "sales": 3100,
          },
          {
            name: '14',
            "sales": 3100,
          },
          {
            name: '15',
            "sales": 3100,
          },
          {
            name: '16',
            "sales": 3100,
          },
          {
            name: '17',
            "sales": 3100,
          },
          {
            name: '18',
            "sales": 3100,
          },
          {
            name: '19',
            "sales": 3100,
          },
          {
            name: '20',
            "sales": 3100,
          },
          {
            name: '21',
            "sales": 3100,
          },
          {
            name: '22',
            "sales": 3100,
          },
          {
            name: '23',
            "sales": 3100,
          },
          {
            name: '24',
            "sales": 3100,
          },
          {
            name: '25',
            "sales": 3100,
          },
      ];

    return (
        <div>
            <Chart title="فروش سالانه" data={data} dataKey="sales" grid/>
            <Chart title="فروش ماهانه" data={data2} dataKey="sales" grid/>
        </div>
    )
}
