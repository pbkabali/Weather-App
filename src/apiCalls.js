const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";
const APP_ID = "4347f0deab7bf2bc00588ae06c3ea1b0";

const getWeatherByCityName = (city, units, action) => {
  fetch(`${BASE_URL}q=${city}&appid=${APP_ID}&units=${units}`, {
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
      action(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getWeatherByCoord = (lat, lon, units, action) => {
  fetch(`${BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}&units=${units}`, {
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
      action(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getWeatherByCityId = (city_id, units, action) => {
  fetch(`${BASE_URL}id=${city_id}&appid=${APP_ID}&units=${units}`, {
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
      action(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getWeatherByCityName;
