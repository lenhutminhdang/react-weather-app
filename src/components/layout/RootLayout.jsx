import ContentHeader from "../ContentHeader";
import WeatherInfomation from "../WeatherInfomation";

export default function RootLayout() {
  return (
    <main className="mx-32">
      <ContentHeader />
      <WeatherInfomation />
    </main>
  );
}
