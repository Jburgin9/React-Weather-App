import "./index.css";

const CurrentWeather = ({ data }) => {
  const temp = data.main.temp;
  const feelsLike = data.main.feels_like;
  const wind = data.wind.speed;

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-desc">{data.weather[0].main}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`/assets/icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temp">{Math.trunc(temp)}°F</p>
        <div className="details">
          <div className="param-row">
            <span className="param-label-details">Details</span>
          </div>
          <div className="param-row">
            <span className="param-label">Feels like</span>
            <span className="param-value">{Math.trunc(feelsLike)} °F</span>
          </div>
          <div className="param-row">
            <span className="param-label">Wind</span>
            <span className="param-value">{Math.trunc(wind)} mph</span>
          </div>
          <div className="param-row">
            <span className="param-label">Humidity</span>
            <span className="param-value">{data.main.humidity} %</span>
          </div>
          <div className="param-row">
            <span className="param-label">Pressure</span>
            <span className="param-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
