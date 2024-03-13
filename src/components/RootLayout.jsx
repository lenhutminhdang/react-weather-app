import CurrentWeather from "./current-weather/CurrentWeather";
import HourlyWeatherSection from "./hourly-weather/HourlyWeatherSection";
import WeatherAlertSection from "./weather-alert/WeatherAlertSection";
import WeatherInfomation from "./weather-infomation/WeatherInfomation";
import WeekdaysWeatherSection from "./weekdays-weather/WeekdaysWeatherSection";
import SearchBar from "./search-bar/SearchBar";
import NotFound from "./NotFound";
import useWeather from "../hooks/useWeather";
import Footer from "./Footer";
import Loader from "./Loader";

export default function RootLayout() {
  const { error, isLoadingWeatherData } = useWeather();

  let content = (
    <>
      <header>
        <CurrentWeather />
        <WeatherInfomation />
      </header>
      <main>
        <HourlyWeatherSection />
        <WeekdaysWeatherSection />
        <WeatherAlertSection />
      </main>
      <Footer />
    </>
  );

  if (isLoadingWeatherData) {
    content = <Loader />;
  }
  if (error && !isLoadingWeatherData) {
    content = <NotFound />;
  }

  return (
    <div className="font-sans font-medium h-screen">
      <div className="container max-w-5xl mt-10 md:mt-8 flex flex-col">
        <SearchBar />
        {content}
      </div>
    </div>
  );
}
