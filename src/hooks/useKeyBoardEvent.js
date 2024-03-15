import { useCallback, useEffect } from "react";
import useWeather from "./useWeather";
import useDarkMode from "./useDarkMode";

const TEMPERATURE_UNITS = "temperatureUnit";
const CELSIUS = "celsius";
const FAHRENHEIT = "fahrenheit";

export default function useKeyBoardEvent() {
  const { setIsFahrenheit, isFahrenheit } = useWeather();
  const { toggleDarkMode } = useDarkMode();

  const toggleTemperature = useCallback(() => {
    if (isFahrenheit) {
      setIsFahrenheit(false);
      localStorage.setItem(TEMPERATURE_UNITS, CELSIUS);
    } else if (!isFahrenheit) {
      setIsFahrenheit(true);
      localStorage.setItem(TEMPERATURE_UNITS, FAHRENHEIT);
    }
  }, [isFahrenheit, setIsFahrenheit]);

  // Get setting data from local storage on first load
  useEffect(() => {
    if (localStorage.getItem(TEMPERATURE_UNITS) === CELSIUS) {
      setIsFahrenheit(false);
    } else if (localStorage.getItem(TEMPERATURE_UNITS) === FAHRENHEIT) {
      setIsFahrenheit(true);
    } else {
      // set temperature unit = celsius by default
      localStorage.setItem(TEMPERATURE_UNITS, CELSIUS);
    }
  }, [setIsFahrenheit]);

  // Handling keyboard event
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.altKey) {
        if (event.key === "u") {
          toggleTemperature();
        }
        if (event.key === "k") {
          toggleDarkMode();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleTemperature, toggleDarkMode]);
}
