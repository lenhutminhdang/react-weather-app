export default function ContentHeader() {
  return (
    <header className="flex flex-row py-10 px-5">
      <div className="basis-1/4 grow flex items-center justify-center">
        <i className="fa-solid fa-sun fa-10x animate-[spin-slow_20s_linear_infinite] text-[#fbbf24]"></i>
      </div>

      <div className="basis-1/3 grow flex flex-col justify-between">
        <p className="text-9xl font-bold">26&deg;</p>
        <p className="text-xl text-[#cbcbcb]">Clear skies, possible cyclone</p>
      </div>

      <div className="basis-1/3 grow grid grid-cols-2 ">
        <div className="flex justify-end gap-2 items-center">
          <div className="flex justify-center items-center rounded-full p-4 w-12 h-12 bg-[#18448f]">
            <i className="fa-solid fa-arrow-down text-[#cbcbcb]"></i>
          </div>
          <p>
            <div className="text-[#9ca1ab]">Min</div>
            <div className="text-4xl font-bold">23&deg;</div>
          </p>
        </div>

        <div className="flex justify-end gap-2 items-center">
          <div className="flex justify-center items-center rounded-full p-4 w-12 h-12 bg-[#18448f]">
            <i className="fa-solid fa-arrow-up text-[#cbcbcb]"></i>
          </div>
          <p>
            <div className="text-[#9ca1ab]">Max</div>
            <div className="text-4xl font-bold">30&deg;</div>
          </p>
        </div>

        <p className="col-span-2 text-[#e67052] text-xl text-right self-end">
          Feels like 25&deg;
        </p>
      </div>
    </header>
  );
}
