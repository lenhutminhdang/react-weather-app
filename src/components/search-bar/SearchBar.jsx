import { SearchContextProvider } from "../../store/SearchContext";
import SearchInput from "./SearchInput";
import SettingButton from "./SettingButton";

export default function SearchBar() {
  return (
    <SearchContextProvider>
      <div className="flex mx-2 sm:mx-1 items-center gap-4 mb-6 md:mb-8">
        <SearchInput />
        <SettingButton />
      </div>
    </SearchContextProvider>
  );
}
