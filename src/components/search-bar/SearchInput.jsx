import { useRef, useState } from "react";

export default function SearchInput() {
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    clickToFocus();
    setSearchTerm("");
  };

  const clickToFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative grow flex items-center text-gray-300 ">
      <i
        onClick={clickToFocus}
        className="absolute left-0 fa-solid fa-magnifying-glass fa-lg p-3 ml-2"
      ></i>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Ho Chi Minh city"
        className="grow p-3 pl-14 focus:outline-none bg-[#1c489c] focus:bg-[#09274b] rounded-full"
      />
      <button
        onClick={handleClear}
        onBlur={clickToFocus}
        className="absolute right-0 text-gray-500"
      >
        <i className="fa-solid fa-circle-xmark p-3 mr-2 text-gray-300"></i>
      </button>
    </div>
  );
}

// import { useRef, useState } from "react";

// export default function SearchInput() {
//   const inputRef = useRef();

//   const [searchTerm, setSearchTerm] = useState("");

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const clickToFocus = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   const handleClear = (e) => {
//     e.preventDefault();
//     clickToFocus();
//   };

//   return (
//     <div className="grow flex items-center bg-[#1c489c] focus-within:bg-[#09274b] text-gray-300 rounded-full">
//       <div className="grow flex items-center">
//         <i
//           className="fa-solid fa-magnifying-glass fa-lg p-3 ml-2"
//           onClick={clickToFocus}
//         ></i>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleChange}
//           ref={inputRef}
//           placeholder="Ho Chi Minh city"
//           className="grow p-3 focus:outline-none bg-[#1c489c] focus:bg-[#09274b]"
//         />
//       </div>
//       <button className="text-gray-500" onClick={handleClear}>
//         <i className="fa-solid fa-circle-xmark p-3 mr-2 text-gray-300"></i>
//       </button>
//     </div>
//   );
// }
