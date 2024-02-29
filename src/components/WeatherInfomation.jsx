export default function WeatherInfomation() {
  return (
    <ul className="grid grid-cols-4 gap-y-4 gap-x-8">
      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i
            className="fa-solid fa-cloud-rain px-5"
            style={{ color: "#ccebf4" }}
          ></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">Chance of rain</h3>
          <p className="font-bold text-2xl">0 %</p>
        </div>
      </li>

      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i className="fa-solid fa-wind px-5" style={{ color: "#eeeeee" }}></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">Wind</h3>
          <p className="font-bold text-2xl">311 km/h</p>
        </div>
      </li>

      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i
            className="fa-solid fa-mountain-sun px-5"
            style={{ color: "#ffc755" }}
          ></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">Sunrise</h3>
          <p className="font-bold text-2xl">4:47 pm</p>
        </div>
      </li>

      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i
            className="fa-solid fa-mountain-sun px-5"
            style={{ color: "#5a7ec6" }}
          ></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">Sunset</h3>
          <p className="font-bold text-2xl">6:16 am</p>
        </div>
      </li>
      {/* ########### */}
      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i className="fa-solid fa-sun px-5" style={{ color: "#fba087" }}></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">UV index</h3>
          <p className="font-bold text-2xl">1.2</p>
        </div>
      </li>

      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i
            className="fa-solid fa-feather px-5"
            style={{ color: "#ccebf4" }}
          ></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">Pressure</h3>
          <p className="font-bold text-2xl">952 hPa</p>
        </div>
      </li>

      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i
            className="fa-solid fa-water px-5"
            style={{ color: "#6abae9" }}
          ></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">Humidity</h3>
          <p className="font-bold text-2xl">98 %</p>
        </div>
      </li>

      <li className="flex p-4">
        <div className="flex justify-center items-center mr-2">
          <i
            className="fa-solid fa-tornado px-5"
            style={{ color: "#78e07d" }}
          ></i>
        </div>
        <div>
          <h3 className="text-[#cbcbcb] text-sm">Gust</h3>
          <p className="font-bold text-2xl">434 km/h</p>
        </div>
      </li>
    </ul>
  );
}
