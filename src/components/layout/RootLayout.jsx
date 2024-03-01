import ContentHeader from "../main-header/ContentHeader";
import HourlyWeatherSection from "../hourly-weather/HourlyWeatherSection";
import WeatherAlertSection from "../weather-alert/WeatherAlertSection";
import WeatherInfomation from "../weather-infomation/WeatherInfomation";
import WeekdaysWeatherSection from "../weekdays-weather/WeekdaysWeatherSection";
import SearchBar from "../search-bar/SearchBar";

export default function RootLayout() {
  return (
    <main className="xl:mx-32 lg:mx-0">
      <SearchBar />
      <ContentHeader />
      <WeatherInfomation />
      <HourlyWeatherSection />
      <WeekdaysWeatherSection />
      <WeatherAlertSection />
    </main>
  );
}
