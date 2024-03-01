import InfoButton from "./InfoButton";

/* eslint-disable react/prop-types */
export default function WeekdaysGridItem({ date, details, temperatureRange }) {
  return (
    <li className="bg-[#143f8c] text-[#cbcbcb] flex items-center gap-3 p-3 rounded-lg">
      {/* ICON */}
      <i
        className="fa-solid fa-cloud fa-4x p-3"
        style={{ color: "#efefef" }}
      ></i>

      {/* DESCRIPTION */}
      <div className="grow shrink">
        {/* - TOP */}
        <div className="mb-3">
          <p className="flex justify-between items-center">
            <span className="font-bold">{date.dayWeek}</span>
            <InfoButton details={details} />
          </p>
          <p className="text-[0.8rem]">{date.dayMonth}</p>
        </div>

        {/* - BOTTOM */}
        <div className="flex">
          <p className="grow">
            <span className="block text-3xl font-bold">
              {temperatureRange.min}&deg;
            </span>
            <span className="text-[0.75rem] block -translate-y-[0.25rem]">
              min
            </span>
          </p>

          <p className="grow">
            <span className="block text-3xl font-bold">
              {temperatureRange.max}&deg;
            </span>
            <span className="text-[0.75rem] block -translate-y-[0.25rem]">
              max
            </span>
          </p>
        </div>
      </div>
    </li>
  );
}