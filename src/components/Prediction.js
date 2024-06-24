import React, { useState } from 'react';

export default function FeatureForm({ onSubmit }) {
  const [stn4contest, setStn4contest] = useState('');
  const [efYear, setEfYear] = useState('');
  const [efMonth, setEfMonth] = useState('');
  const [efDay, setEfDay] = useState('');
  const [efHour, setEfHour] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ stn4contest, efYear, efMonth, efDay, efHour });
  };

  const stn4contests = Array.from({ length: 20 }, (_, i) => `STN${String(i + 1).padStart(3, '0')}`);
  const years = ['A', 'B', 'C', 'D'];
  const months = [5, 6, 7, 8, 9, 10];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = [0, 3, 6, 9, 12, 15, 18, 21];

  return (
    <div className="flex flex-col items-center justify-start h-screen py-24 sm:py-32 lg:px-8 lg:pl-72">
      <form onSubmit={handleSubmit} className="space-y-4 w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="w-full sm:w-auto">
            <label htmlFor="stn4contest" className="block text-sm font-medium text-gray-700">stn4contest</label>
            <select
              id="stn4contest"
              value={stn4contest}
              onChange={(e) => setStn4contest(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">AWS 지점 코드</option>
              {stn4contests.map((stn4contest) => (
                <option key={stn4contest} value={stn4contest}>{stn4contest}</option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="efYear" className="block text-sm font-medium text-gray-700">ef_year</label>
            <select
              id="efYear"
              value={efYear}
              onChange={(e) => setEfYear(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">년도</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="efMonth" className="block text-sm font-medium text-gray-700">ef_month</label>
            <select
              id="efMonth"
              value={efMonth}
              onChange={(e) => setEfMonth(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">월</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="efDay" className="block text-sm font-medium text-gray-700">ef_day</label>
            <select
              id="efDay"
              value={efDay}
              onChange={(e) => setEfDay(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">일</option>
              {days.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label htmlFor="efHour" className="block text-sm font-medium text-gray-700">ef_hour</label>
            <select
              id="efHour"
              value={efHour}
              onChange={(e) => setEfHour(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">시간</option>
              {hours.map((hour) => (
                <option key={hour} value={hour}>{hour}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full sm:w-auto">
          <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            예측 결과 보기
          </button>
        </div>
      </form>
    </div>
  );
}
