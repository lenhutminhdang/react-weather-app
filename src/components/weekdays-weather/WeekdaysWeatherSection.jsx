import { useState } from "react";
import Button from "../ui/Button";
import H2 from "../ui/H2";
import Section from "../ui/Section";

import WeekdaysGridView from "./grid-view/WeekdaysGridView";
import WeekdaysTableView from "./table-view/WeekdaysTableView";

export default function WeekdaysWeatherSection() {
  const [view, setView] = useState(true);

  const toggleView = () => {
    setView((prevState) => !prevState);
  };

  let btnIcon = (
    <i
      className="fa-solid fa-table-list fa-lg"
      style={{ color: "#ababab" }}
    ></i>
  );

  if (!view) {
    btnIcon = (
      <i
        className="fa-solid fa-border-all fa-lg"
        style={{ color: "#ababab" }}
      ></i>
    );
  }

  return (
    <Section>
      <div className="flex justify-between items-center mb-5">
        <H2>This week</H2>
        <Button onClick={toggleView}>{btnIcon}</Button>
      </div>
      {view && <WeekdaysGridView />}
      {!view && <WeekdaysTableView />}
    </Section>
  );
}
