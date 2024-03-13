import WeatherInfomationItem from "./WeatherInfomationItem";
import { formatDateIntl, formatNumber } from "../../utils/utils";
import { units } from "../../utils/mapping";
import useWeather from "../../hooks/useWeather";

export default function WeatherInfomation() {
  const { dailyWeathers } = useWeather();
  const data = {
    rainChance:
      dailyWeathers.timelines.daily[0].values.precipitationProbabilityAvg,
    wind: dailyWeathers.timelines.daily[0].values.windSpeedAvg,
    sunriseTime: dailyWeathers.timelines.daily[0].values.sunriseTime,
    sunsetTime: dailyWeathers.timelines.daily[0].values.sunsetTime,
    uvIndexAvg: dailyWeathers.timelines.daily[0].values.uvIndexAvg,
    pressureSurfaceLevelAvg:
      dailyWeathers.timelines.daily[0].values.pressureSurfaceLevelAvg,
    humidityAvg: dailyWeathers.timelines.daily[0].values.humidityAvg,
    windGustAvg: dailyWeathers.timelines.daily[0].values.windGustAvg,
  };

  return (
    <ul className="grid sm:grid-cols-3 md:grid-cols-4 gap-y-6 sm:gap-y-4 md:gap-y-10 md:p-4 sm:mb-10 mb-12">
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-cloud-rain dark:text-[#ccebf4] text-purple-400 text-xl md:text-lg"></i>
        }
        title="Chance of rain"
        value={formatNumber(data.rainChance, units.percent)}
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-wind dark:text-[#eeeeee] text-slate-400 text-xl md:text-lg"></i>
        }
        title="Wind"
        value={formatNumber(data.wind, units["kilometer-per-hour"])}
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-mountain-sun text-[#ffc755] text-xl md:text-lg"></i>
        }
        title="Sunrise"
        value={formatDateIntl(data.sunriseTime).toLocaleLowerCase()}
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-mountain-sun text-[#5a7ec6] text-xl md:text-lg"></i>
        }
        title="Sunset"
        value={formatDateIntl(data.sunsetTime).toLocaleLowerCase()}
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-sun text-[#fba087] text-xl md:text-lg"></i>
        }
        title="UV index"
        value={data.uvIndexAvg}
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-arrow-trend-up dark:text-[#ccebf4] text-zinc-400 text-xl md:text-lg"></i>
        }
        title="Pressure"
        value={formatNumber(data.pressureSurfaceLevelAvg)}
        unit="hPa"
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-water text-[#6abae9] text-xl md:text-lg"></i>
        }
        title="Humidity"
        value={formatNumber(data.humidityAvg, units.percent)}
      />
      <WeatherInfomationItem
        icon={
          <i className="fa-solid fa-tornado text-[#78e07d] text-xl md:text-lg"></i>
        }
        title="Gust"
        value={formatNumber(data.windGustAvg, units["kilometer-per-hour"])}
      />
    </ul>
  );
}
