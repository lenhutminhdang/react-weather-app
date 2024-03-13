import Tbody from "./Tbody";
import Thead from "./Thead";

export default function WeekdaysGridView() {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-right">
        <Thead />
        <Tbody />
      </table>
    </div>
  );
}
