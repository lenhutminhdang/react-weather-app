/* eslint-disable react/prop-types */
export default function WeatherAlert({ title, message }) {
  return (
    <div className="bg-[#fbbf24] text-black flex items-center gap-4 p-4 rounded-lg">
      <i
        className="fa-solid fa-triangle-exclamation fa-xl"
        style={{ color: "#000000" }}
      ></i>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-900">{message}</p>
      </div>
    </div>
  );
}
