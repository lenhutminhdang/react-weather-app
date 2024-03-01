export default function Tr() {
  const dummyData = {
    dayWeek: "Fri",
    rainChance: 100,
    humidity: 44,
    pressure: 1009,
    min: 24,
    max: 38,
  };

  return (
    <tr className="bg-[#103a87] border-b last:border-0 border-slate-500">
      <td className="first:text-left p-4">
        <i className="fa-solid fa-cloud fa-md" style={{ color: "#efefef" }}></i>
        <span className="ml-3">{dummyData.dayWeek}</span>
      </td>
      <td className="p-4">{dummyData.rainChance}%</td>
      <td className="p-4">{dummyData.humidity}%</td>
      <td className="p-4">{dummyData.pressure} hPa</td>
      <td className="p-4">{dummyData.min}&deg;</td>
      <td className="p-4">{dummyData.max}&deg;</td>
    </tr>
  );
}
