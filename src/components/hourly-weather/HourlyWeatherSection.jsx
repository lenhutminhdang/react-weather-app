import H2 from "../ui/H2";
import Section from "../ui/Section";
import HourlyList from "./HourlyList";

export default function HourlyWeatherSection() {
  return (
    <Section>
      <H2 className="mb-5">Hourly</H2>
      <HourlyList />
    </Section>
  );
}
