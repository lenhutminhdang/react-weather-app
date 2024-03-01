import H2 from "../ui/H2";
import Section from "../ui/Section";
import WeatherAlert from "./WeatherAlert";

export default function WeatherAlertSection() {
  return (
    <Section>
      <H2 className="mb-5">Alerts</H2>
      <WeatherAlert
        title="Category 5 cyclone warning issued"
        message="Possible cyclone today, bring a jacket just in case."
      />
    </Section>
  );
}
