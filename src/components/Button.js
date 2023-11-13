const Button = ({
  background,
  buttonText,
  margin,
  marginTop,
  marginBottom,
  onClick,
}) => {
  const buttonStyle = {
    background: background,
    margin: margin,
    marginTop: marginTop,
    marginBottom: marginBottom,
  };

  return (
    <button
      className="Btn"
      style={buttonStyle}
      data-text={buttonText}
      onClick={onClick}
    ></button>
  );
};

export default Button;
