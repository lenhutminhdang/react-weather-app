import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import Setting from "./Setting";

export default function SettingButton() {
  const settingRef = useRef();
  const [settingIsShow, setSettingIsShow] = useState(false);

  const handleSettingToggle = () => {
    setSettingIsShow(!settingIsShow);
  };

  const handleClickOutside = (e) => {
    if (settingRef.current && !settingRef.current.contains(e.target)) {
      setSettingIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <Button onClick={handleSettingToggle} size={12}>
        <i className="fa-solid fa-gear fa-xl"></i>
      </Button>
      {settingIsShow && <Setting ref={settingRef} />}
    </div>
  );
}
