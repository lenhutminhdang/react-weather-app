/* eslint-disable react/display-name */
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const WeekdaysDetails = forwardRef(({ details }, ref) => {
  return (
    <div
      className="bg-[#021e3e] absolute right-0 z-50 translate-y-2 flex flex-col gap-6 p-3 w-[12.5rem] rounded-md"
      ref={ref}
    >
      <p className="flex justify-between items-center gap-3">
        <i className="fa-solid fa-wind text-[#6abae9]"></i>
        <span className="grow text-gray-100 font-bold">Wind</span>
        <span className="grow text-right text-gray-300">
          {details.wind} km/h
        </span>
      </p>

      <p className="flex justify-between items-center gap-3">
        <i className="fa-solid fa-cloud-rain text-[#6abae9]"></i>
        <span className="grow text-gray-100 font-bold">Rain chance</span>
        <span className="grow text-right text-gray-300">{details.wind}%</span>
      </p>

      <p className="flex justify-between items-center gap-3">
        <i className="fa-solid fa-water text-[#6abae9]"></i>
        <span className="grow text-gray-100 font-bold">Humidity</span>
        <span className="grow text-right text-gray-300">{details.wind}%</span>
      </p>

      <p className="flex justify-between items-center gap-3">
        <i className="fa-solid fa-arrow-trend-up text-[#6abae9]"></i>
        <span className="grow text-gray-100 font-bold">Pressure</span>
        <span className="grow text-right text-gray-300">
          {details.wind} hPa
        </span>
      </p>
    </div>
  );
});

export default WeekdaysDetails;
