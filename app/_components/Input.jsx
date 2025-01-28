function Input({
  className,
  placeholder = 'Lorem ipsum dolor sit amet',
  ...props
}) {
  return (
    <input
      className={`w-[316px] h-[50px] rounded-[1.5rem] border border-black px-4
      placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 
      ${className || ''}`}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
