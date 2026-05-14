const Button = ({ name, isBeam = false, containerClass, style, ...props }) => {
  return (
    <button
      className={`btn ${containerClass}`}
      style={{
        backgroundColor: 'var(--button-background-color)', // Use dynamic button background color
        ...style, // Allow additional styles to be passed
      }}
      {...props}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
