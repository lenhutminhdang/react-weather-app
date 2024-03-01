/* eslint-disable react/prop-types */
export default function Button({ children, onClick, size = 10 }) {
  const classes = `h-${size} w-${size}`;

  return (
    <button
      onClick={onClick}
      className={`bg-[#1a4691] hover:bg-[#09274b] flex justify-center items-center rounded-full ${classes}`}
    >
      {children}
    </button>
  );
}
