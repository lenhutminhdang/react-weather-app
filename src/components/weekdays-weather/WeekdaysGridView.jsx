import WeekdaysGridItem from "./WeekdaysGridItem";

export default function WeekdaysGridView() {
  const dummyDate = {
    dayWeek: "FRI",
    dayMonth: "16 SEP",
  };

  const dummyRange = {
    min: 24,
    max: 38,
  };

  const dummyDetails = {
    wind: 23,
    rainChance: 100,
    humidity: 44,
    pressure: 1009,
  };

  return (
    <ul className="grid grid-cols-3 gap-3">
      <WeekdaysGridItem
        date={dummyDate}
        temperatureRange={dummyRange}
        details={dummyDetails}
      />
      <WeekdaysGridItem
        date={dummyDate}
        temperatureRange={dummyRange}
        details={dummyDetails}
      />
      <WeekdaysGridItem
        date={dummyDate}
        temperatureRange={dummyRange}
        details={dummyDetails}
      />
      <WeekdaysGridItem
        date={dummyDate}
        temperatureRange={dummyRange}
        details={dummyDetails}
      />
      <WeekdaysGridItem
        date={dummyDate}
        temperatureRange={dummyRange}
        details={dummyDetails}
      />
      <WeekdaysGridItem
        date={dummyDate}
        temperatureRange={dummyRange}
        details={dummyDetails}
      />
    </ul>
  );
}
