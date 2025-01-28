const HeadingMedium = ({ children, className = '' }) => {
  return (
    <h2
      className={`
        text-h2
        font-medium
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

export default HeadingMedium;
