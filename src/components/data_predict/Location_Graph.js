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
        borderColor: 'rgba(75, 192, 192, 0.6)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        fill: false,
      },
      {
        label: 'v02',
        data: data.map(item => item.v02),
        borderColor: 'rgba(255, 99, 132, 0.6)',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        fill: false,
      },
      {
        label: 'v03',
        data: data.map(item => item.v03),
        borderColor: 'rgba(54, 162, 235, 0.6)',
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        fill: false,
      },
      {
        label: 'v04',
        data: data.map(item => item.v04),
        borderColor: 'rgba(255, 206, 86, 0.6)',
        backgroundColor: 'rgba(255, 206, 86, 0.3)',
        fill: false,
      },
      {
        label: 'v05',
        data: data.map(item => item.v05),
        borderColor: 'rgba(75, 192, 192, 0.6)',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        fill: false,
      },
      {
        label: 'v06',
        data: data.map(item => item.v06),
        borderColor: 'rgba(153, 102, 255, 0.6)',
        backgroundColor: 'rgba(153, 102, 255, 0.3)',
        fill: false,
      },
      {
        label: 'v07',
        data: data.map(item => item.v07),
        borderColor: 'rgba(255, 159, 64, 0.6)',
        backgroundColor: 'rgba(255, 159, 64, 0.3)',
        fill: false,
      },
      {
        label: 'v08',
        data: data.map(item => item.v08),
        borderColor: 'rgba(153, 102, 255, 0.6)',
        backgroundColor: 'rgba(153, 102, 255, 0.3)',
        fill: false,
      },
      {
        label: 'v09',
        data: data.map(item => item.v09),
        borderColor: 'rgba(255, 159, 64, 0.6)',
        backgroundColor: 'rgba(255, 159, 64, 0.3)',
        fill: false,
      },
    ];

    setChartData({
      labels,
      datasets,
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">지점별 누적 강수량</h2>
      {chartData && chartData.labels && chartData.labels.length > 0 && (
        <Bar data={chartData} />
      )}
    </div>
  );
}
