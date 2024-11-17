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

const DoughnutComponenet = ({ dataBE }) => {
    const data = {
        labels: dataBE.map((item) => item.brandName),
        datasets: [
            {
                label: 'Tổng số lượng đã bán',
                data: dataBE.map((item) => item.totalSold),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    '#343434',
                    '#b1d777',
                    '#ff80fd',
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
