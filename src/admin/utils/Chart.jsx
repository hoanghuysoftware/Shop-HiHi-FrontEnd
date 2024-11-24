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

const MyChart = ({ dataB, dataI }) => {
    const dataSell = [dataB.length];
    const dataImport = [dataB.length];
    dataB.map((item) => (dataSell[item.month - 1] = item.totalSold));
    dataI.map((item) => (dataImport[item.month - 1] = item.totalSold));
    const month = [
        'Tháng 1',
        'Tháng 2',
        'Tháng 3',
        'Tháng 4',
        'Tháng 5',
        'Tháng 6',
        'Tháng 7',
        'Tháng 8',
        'Tháng 9',
        'Tháng 10',
        'Tháng 11',
        'Tháng 12',
    ];
    const dataBar = {
        labels: month,
        datasets: [
            {
                label: 'Bán hàng',
                data: dataSell,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                barThickness: 'flex', // do rong cua cot
            },
            {
                label: 'Nhập hàng',
                data: dataImport,
                fill: false,
                barThickness: 'flex', // do rong cua cot
                backgroundColor: 'rgb(209,0,36)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            //     title: {
            //         display: true,
            //         text: 'Doanh thu bán hàng',
            //     },
        },
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
