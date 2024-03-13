export default function WeakdaysDetailsItem({ icon, label, value }) {
  return (
    <p className="flex items-center text-base sm:text-lg md:text-base">
      <div className="w-8 md:w-7">{icon}</div>
      <span className="grow dark:text-gray-100 font-semibold">{label}</span>
      <span className="grow text-right dark:text-gray-300 text-gray-500">
        {value}
      </span>
    </p>
  );
}
