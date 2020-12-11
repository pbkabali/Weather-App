const extractWeatherData = (data) => {
  return {
    condition: data.weather[0].description,
    temperature: data.main.temp,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    country: data.sys.country,
    name: data.name,
  };
};

export default extractWeatherData;
