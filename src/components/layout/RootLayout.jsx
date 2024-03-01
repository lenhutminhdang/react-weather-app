import CurrentWeather from "../current-weather/CurrentWeather";
import HourlyWeatherSection from "../hourly-weather/HourlyWeatherSection";
import WeatherAlertSection from "../weather-alert/WeatherAlertSection";
import WeatherInfomation from "../weather-infomation/WeatherInfomation";
import WeekdaysWeatherSection from "../weekdays-weather/WeekdaysWeatherSection";
import SearchBar from "../search-bar/SearchBar";

export default function RootLayout() {
  return (
    <div className="lg:container mx-auto font-sans font-medium text-gray-50">
      <div className="xl:mx-32 lg:mx-0 pt-10">
        <header>
          <SearchBar />
        </header>
        <main>
          <CurrentWeather />
          <WeatherInfomation />
          <HourlyWeatherSection />
          <WeekdaysWeatherSection />
          <WeatherAlertSection />
        </main>
      </div>
    </div>
  );
}
