/* eslint-disable react/prop-types */
export default function HourlyItem({ time, unit, icon, temperature }) {
  return (
    <li className="bg-[#143f8c] shrink grow flex flex-col items-center p-4 text-center rounded-xl">
      <p className="text-[#cbcbcb] text-sm pb-4">
        {time} {unit}
      </p>
      {icon}
      <p className="text-xl">{temperature}&deg;</p>
    </li>
  );
}
