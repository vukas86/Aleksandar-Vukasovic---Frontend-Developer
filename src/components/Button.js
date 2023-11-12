const Button = ({
  background,
  buttonText,
  margin,
  marginTop,
  marginBottom,
}) => {
  const buttonStyle = {
    background: background,
    margin: margin,
    marginTop: marginTop,
    marginBottom: marginBottom,
  };

  return (
    <button className="Btn" style={buttonStyle} data-text={buttonText}></button>
  );
};

export default Button;
