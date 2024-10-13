// MyChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const MyChart = () => {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    // const data = {
    //     labels: month,
    //     datasets: [
    //         {
    //             label: 'Bán hàng',
    //             data: [65, 59, 80, 81, 56, 55, 40],
    //             fill: false,
    //             borderColor: 'rgb(75, 192, 192)',
    //             tension: 0.1,
    //         },
    //         {
    //             label: 'Nhập hàng',
    //             data: [100, 20, 10, 30, 45, 50, 20],
    //             fill: true,
    //             borderColor: 'rgb(209,0,36)',
    //             tension: 0.1,
    //         },
    //     ],
    // };
    const dataBar = {
        labels: month,
        datasets: [
            {
                label: 'Bán hàng',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                // hoverBackgroundColor: 'rgb(209,0,36)',
                barThickness: 'flex', // do rong cua cot
            },
            {
                label: 'Nhập hàng',
                data: [100, 20, 10, 30, 45, 50, 20],
                fill: false,
                backgroundColor: 'rgb(209,0,36)',
            },
        ],
    };

    const options = {
        // responsive: true,
        // plugins: {
        //     legend: {
        //         position: 'top',
        //     },
        //     title: {
        //         display: true,
        //         text: 'Doanh thu bán hàng',
        //     },
        // },
        type: 'bar',
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={dataBar} options={options} />;
};

export default MyChart;
