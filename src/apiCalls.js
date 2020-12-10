const APP_ID = "4347f0deab7bf2bc00588ae06c3ea1b0";

const getWeather = (city, action) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      action(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getWeather;
