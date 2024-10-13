import React from 'react';
import { Pie } from 'react-chartjs-2';
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
    ArcElement,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const DoughnutComponenet = () => {
    const data = {
        labels: ['Asus', 'Dell', 'MSI', 'Acer', 'HP'],
        datasets: [
            {
                label: 'Tổng số lượng bán hàng',
                data: [300, 50, 100, 30, 50],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    '#343434',
                    '#b1d777',
                    '#ff80ff',
                ],
                hoverOffset: 1,
            },
        ],
    };
    const config = {
        type: 'pie',
    };
    return <Pie data={data} options={config} />;
};

export default DoughnutComponenet;
