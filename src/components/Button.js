const Button = ({ background, buttonText }) => {
  const buttonStyle = {
    background: background,
  };

  return (
    <button className="Btn" style={buttonStyle} data-text={buttonText}></button>
  );
};

export default Button;
