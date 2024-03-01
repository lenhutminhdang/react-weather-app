import SearchInput from "./SearchInput";
import SettingButton from "./SettingButton";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-4">
      <SearchInput />
      <SettingButton />
    </div>
  );
}
