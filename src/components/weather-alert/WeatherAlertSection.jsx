import H2 from "../ui/H2";
import Section from "../ui/Section";
import NoAlert from "./NoAlert";
import WeatherAlert from "./WeatherAlert";
import useWeather from "../../hooks/useWeather";

export default function WeatherAlertSection() {
  const { alert } = useWeather();

  return (
    <Section>
      <H2 className="mb-5">Alerts</H2>
      {alert && <WeatherAlert title={alert.title} message={alert.message} />}
      {!alert && <NoAlert />}
    </Section>
  );
}
