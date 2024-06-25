import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function LocationChart({ filters }) {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/features', {
      params: {
        stn4contest: filters.stn4contest,
        year: filters.efYear,
        month: filters.efMonth,
        day: filters.efDay,
      }
    })
    .then(response => {
      setData(response.data);
      processChartData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [filters]);

  const processChartData = (data) => {
    const labels = data.map(item => item.stn4contest);
    const datasets = [
      {
        label: 'v01',
        data: data.map(item => item.v01),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        barThickness: 8, // 막대 두께 조정
      },
      {
        label: 'v02',
        data: data.map(item => item.v02),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        barThickness: 8,
      },
      {
        label: 'v03',
        data: data.map(item => item.v03),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        barThickness: 8,
      },
      {
        label: 'v04',
        data: data.map(item => item.v04),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        barThickness: 8,
      },
      {
        label: 'v05',
        data: data.map(item => item.v05),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        barThickness: 8,
      },
      {
        label: 'v06',
        data: data.map(item => item.v06),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        barThickness: 8,
      },
      {
        label: 'v07',
        data: data.map(item => item.v07),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        barThickness: 8,
      },
      {
        label: 'v08',
        data: data.map(item => item.v08),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        barThickness: 8,
      },
      {
        label: 'v09',
        data: data.map(item => item.v09),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        barThickness: 8,
      },
    ];

    setChartData({
      labels,
      datasets,
    });
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 90, // x축 라벨 회전
          minRotation: 90,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-5 w-full h-full">
      <h2 className="text-lg font-semibold mb-4">지점별 누적 강수량</h2>
      {chartData && chartData.labels && chartData.labels.length > 0 && (
        <Bar data={chartData} options={options} />
      )}
    </div>
  );
}
