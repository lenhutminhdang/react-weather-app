import ContentHeader from "../ContentHeader";
import HourlyWeather from "../hourly-weather/HourlyWeather";
import WeatherInfomation from "../weather-infomation/WeatherInfomation";
import WeekdaysWeather from "../weekdays-weather/WeekdaysWeather";

export default function RootLayout() {
  return (
    <main className="xl:mx-32 lg:mx-0">
      <ContentHeader />
      <WeatherInfomation />
      <HourlyWeather />
      <WeekdaysWeather />
    </main>
  );
}
