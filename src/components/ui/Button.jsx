/* eslint-disable react/prop-types */
export default function Button({ children }) {
  return (
    <button
      className={`bg-[#1a4691] flex justify-center items-center rounded-full h-10 w-10`}
    >
      {children}
    </button>
  );
}
