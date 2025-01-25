function Button({ children, className }) {
  return (
    <button
      className={`bg-black text-white px-[38px] py-[18px] rounded-27 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
