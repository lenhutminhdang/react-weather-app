/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { fakeWeatherData } from "../utils/fakeWeatherData";

import { getWeatherAlert } from "../utils/utils";
import useHttp from "../hooks/useHttp";
import useLocation from "../hooks/useLocation";

const WeatherContext = createContext({
  todayWeather: {},
  dailyWeathers: {},
  hourlyWeathers: {},
  isFahrenheit: false,
  toggleTemperature() {},
  alert: {},
  error: null,
  setFakeWeatherData() {},
  isLoadingWeatherData: false,
});

const WeatherContextProvider = ({ children }) => {
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [weather, setWeather] = useState({
    current: null,
    daily: null,
    hourly: null,
  });
  const [error, setError] = useState();

  const { location } = useLocation();
  const locationError = location.error;

  const {
    data,
    error: apiError,
    isLoading: isLoadingWeatherData,
    setIsLoading: setIsLoadingWeatherData,
    fetchDataAndUpdateState,
  } = useHttp(location.coords);

  const toggleTemperature = () =>
    setIsFahrenheit((isFahrenheit) => !isFahrenheit);

  const setFakeWeatherData = () => {
    setWeather(fakeWeatherData);
    setError(null);
  };

  useEffect(() => {
    fetchDataAndUpdateState();
  }, [fetchDataAndUpdateState]);

  useEffect(() => {
    if (apiError) {
      setError(apiError);
    }
    if (locationError) {
      setError(locationError);
    }
    if (data.current && data.daily && data.hourly) {
      setError(null);
      setIsLoadingWeatherData(false);
      setWeather(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, apiError, locationError]);

  const todayWeather = weather.current || fakeWeatherData.current;
  const dailyWeathers = weather.daily || fakeWeatherData.daily;
  const hourlyWeathers = weather.hourly || fakeWeatherData.hourly;

  // const alert = getWeatherAlert(80000);
  const alert = getWeatherAlert(todayWeather.data.values.weatherCode);

  const weatherContext = {
    todayWeather,
    dailyWeathers,
    hourlyWeathers,
    isFahrenheit,
    toggleTemperature,
    alert,
    error,
    setFakeWeatherData,
    isLoadingWeatherData,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
