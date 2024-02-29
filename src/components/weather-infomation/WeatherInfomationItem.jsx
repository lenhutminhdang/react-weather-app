/* eslint-disable react/prop-types */
export default function WeatherInfomationItem({ icon, title, value, unit }) {
  return (
    <li className="flex p-4">
      <div className="flex justify-center items-center mr-2">{icon}</div>
      <div>
        <h3 className="text-[#cbcbcb] text-sm">{title}</h3>
        <p className="font-bold text-2xl">
          {value} {unit}
        </p>
      </div>
    </li>
  );
}
