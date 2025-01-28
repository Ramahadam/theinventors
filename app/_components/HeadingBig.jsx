function HeadingBig({ children, className }) {
  return (
    <h1 className={`text-h2 font-medium  mb-[20px] mt-[40px] ${className}`}>
      {children}
    </h1>
  );
}

export default HeadingBig;
