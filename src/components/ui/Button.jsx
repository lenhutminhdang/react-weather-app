/* eslint-disable react/prop-types */
export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1a4691] hover:bg-[#09274b] flex justify-center items-center rounded-full h-10 w-10`}
    >
      {children}
    </button>
  );
}
