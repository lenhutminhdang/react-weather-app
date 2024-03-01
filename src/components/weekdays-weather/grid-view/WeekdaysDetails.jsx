/* eslint-disable react/prop-types */
export default function WeekdaysDetails({ details }) {
  return (
    <div className="hidden">
      <p>
        <i className="fa-solid fa-wind px-5" style={{ color: "#eeeeee" }}></i>
        <span>Wind</span>
        <span>{details.wind}</span>
      </p>
    </div>
  );
}
