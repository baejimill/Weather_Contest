import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function TimeSeriesChart({ filters }) {
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
    const labels = data.map(item => `${item.fcYear}-${item.fcMonth}-${item.fcDay} ${item.fcHour}`);
    const datasets = [
      {
        label: 'v01',
        data: data.map(item => item.v01),
        borderColor: 'rgba(75, 192, 192, 0.6)',
        fill: false,
      },
      {
        label: 'v02',
        data: data.map(item => item.v02),
        borderColor: 'rgba(153, 102, 255, 0.6)',
        fill: false,
      },
      // 필요한 경우 v03~v09에 대한 데이터셋을 추가합니다.
    ];

    setChartData({
      labels,
      datasets,
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold mb-4">시간에 따른 누적 강수량</h2>
      {chartData && chartData.labels && chartData.labels.length > 0 && (
        <Line data={chartData} />
      )}
    </div>
  );
}
