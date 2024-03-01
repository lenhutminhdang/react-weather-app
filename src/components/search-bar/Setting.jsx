/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Setting = forwardRef((props, ref) => {
  console.log("SETTINg");
  return (
    <div
      className="bg-[#021e3e] absolute right-0 z-50 translate-y-2 flex flex-col w-64 rounded-md overflow-hidden cursor-pointer"
      ref={ref}
    >
      <p className="flex justify-between items-center gap-3 p-3 hover:bg-[#072a66] ease-in-out duration-100">
        <i className="fa-solid fa-moon"></i>
        {/* <i class="fa-solid fa-sun"></i> */}
        <span className="grow text-gray-100 font-bold">Dark</span>
        <span className="grow text-right text-gray-300">(Ctrl + K)</span>
      </p>

      <p className="flex justify-between items-center gap-3 p-3 hover:bg-[#072a66] ease-in-out duration-100">
        <i className="fa-solid fa-temperature-three-quarters"></i>
        <span className="grow text-gray-100 font-bold">Celsius</span>
        <span className="grow text-right text-gray-300">(Ctrl + U)</span>
      </p>
    </div>
  );
});

export default Setting;
