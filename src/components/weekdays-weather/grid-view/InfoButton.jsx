/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import Button from "../../ui/Button";
import WeekdaysDetails from "./WeekdaysDetails";

export default function InfoButton({ details }) {
  const tooltipRef = useRef();
  const [tooltipIsShow, setTooltipIsShow] = useState(false);

  const handleTooltipToggle = () => {
    setTooltipIsShow(!tooltipIsShow);
  };

  const handleClickOutside = (e) => {
    if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
      setTooltipIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Button onClick={handleTooltipToggle} size={12}>
        <i
          className="fa-solid fa-circle-info fa-lg"
          style={{ color: "#ababab" }}
        ></i>
      </Button>
      {tooltipIsShow && <WeekdaysDetails ref={tooltipRef} details={details} />}
    </div>
  );
}
