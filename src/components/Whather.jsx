import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const apiKey = '636fcbd9e9a38b142cb46238fe1c98c4'; 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          setError('위치 정보를 가져오는데 실패.');
          setLoading(false);
        }
      );
    } else {
      setError('이 브라우저에서는 위치 정보가 지원되지 않습니다.');
      setLoading(false);
    }
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setError('날씨 정보를 가져오는데 실패.');
      setLoading(false);
    }
  };

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const {name, sys, main, weather:weatherInfo} = weather;
  const weatherIcconUrl = `http://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;

  return (
    <div className='p-20 mt-20'>
    <div className=" max-w-xs bg-blue-800 text-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-300 text-white text-center py-4">
      <h1 className="font-bold p-2"> 실시간 날씨 정보 </h1>
      </div>
      <div className='p-2'>
        <div className='flex-justify-center mb-4'>
      <p> {weather.name}, {weather.sys.country}</p>
          <img src={weatherIcconUrl} alt='Weather Icon' className='h-16 w-16'/>
          </div>
      <p>{weather.main.temp}°C</p>
      <p> {weather.weather[0].description}</p>
    </div>
    </div>
    </div>
  );
};

export default Weather;
