export default function THead() {
  return (
    <thead>
      <tr className="bg-[#18448f] border-b border-slate-500">
        <th className="font-normal p-4 first:text-left">Day</th>
        <th className="font-normal p-4">Chance of rain</th>
        <th className="font-normal p-4">Humidity</th>
        <th className="font-normal p-4">Pressure</th>
        <th className="font-normal p-4">Min</th>
        <th className="font-normal p-4">Max</th>
      </tr>
    </thead>
  );
}
