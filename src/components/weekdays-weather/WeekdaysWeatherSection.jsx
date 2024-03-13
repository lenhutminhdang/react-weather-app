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
    <i className="fa-solid fa-table-list text-2xl sm:text-lg dark:text-[#ababab] text-gray-500"></i>
  );

  if (!view) {
    btnIcon = (
      <i className="fa-solid fa-border-all text-2xl sm:text-lg dark:text-[#ababab] text-gray-500"></i>
    );
  }

  return (
    <Section>
      <div className="flex justify-between items-center mb-5">
        <H2>Weekly</H2>
        <Button onClick={toggleView} sizeClass="w-14 sm:w-12 h-14 sm:h-12">
          {btnIcon}
        </Button>
      </div>
      {view && <WeekdaysGridView />}
      {!view && <WeekdaysTableView />}
    </Section>
  );
}
