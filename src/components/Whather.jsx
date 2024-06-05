import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
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

  return (
    <div>
      <h1>실시간 날씨 정보</h1>
      <p>위치: {weather.name}, {weather.sys.country}</p>
      <p>온도: {weather.main.temp}°C</p>
      <p>설명: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
