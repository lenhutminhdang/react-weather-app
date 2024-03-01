import WeatherInfomationItem from "./WeatherInfomationItem";

export default function WeatherInfomation() {
  return (
    <ul className="grid grid-cols-4 gap-y-4 gap-x-8 mb-9">
      <WeatherInfomationItem
        icon={
          <i
            className="fa-solid fa-cloud-rain px-5"
            style={{ color: "#ccebf4" }}
          ></i>
        }
        title="Chance of rain"
        value={0}
        unit="%"
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-wind px-5" style={{ color: "#eeeeee" }}></i>
        }
        title="Wind"
        value={311}
        unit="km/h"
      />
      <WeatherInfomationItem
        icon={
          <i
            className="fa-solid fa-mountain-sun px-5"
            style={{ color: "#ffc755" }}
          ></i>
        }
        title="Sunrise"
        value="4:47"
        unit="pm"
      />
      <WeatherInfomationItem
        icon={
          <i
            className="fa-solid fa-mountain-sun px-5"
            style={{ color: "#5a7ec6" }}
          ></i>
        }
        title="Sunset"
        value="6:16"
        unit="am"
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-sun px-5" style={{ color: "#fba087" }}></i>
        }
        title="UV index"
        value={1.2}
      />
      <WeatherInfomationItem
        icon={
          <i
            className="fa-solid fa-arrow-trend-up px-5"
            style={{ color: "#ccebf4" }}
          ></i>
        }
        title="Pressure"
        value={952}
        unit="hPa"
      />
      <WeatherInfomationItem
        icon={
          <i
            className="fa-solid fa-water px-5"
            style={{ color: "#6abae9" }}
          ></i>
        }
        title="Humidity"
        value={98}
        unit="%"
      />
      <WeatherInfomationItem
        icon={
          <i
            className="fa-solid fa-tornado px-5"
            style={{ color: "#78e07d" }}
          ></i>
        }
        title="Gust"
        value={434}
        unit="km/h"
      />
    </ul>
  );
}
