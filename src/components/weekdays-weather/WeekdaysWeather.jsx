import Button from "../ui/Button";
import WeekdaysGridView from "./WeekdaysGridView";

export default function WeekdaysWeather() {
  return (
    <section className="px-5 mb-9">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">This week</h2>
        <Button>
          <i
            className="fa-solid fa-border-all fa-lg"
            style={{ color: "#ababab" }}
          ></i>
        </Button>
      </div>
      <WeekdaysGridView />
    </section>
  );
}
