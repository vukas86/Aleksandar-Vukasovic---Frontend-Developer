import { useDispatch } from "react-redux";
import { selectRocket } from "../store/rocketsSlice";

const Button = ({
  background,
  buttonText,
  margin,
  marginTop,
  marginBottom,
  onClick,
  rocket,
}) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(selectRocket(rocket));
    if (onClick) {
      onClick();
    }
  };
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
      onClick={handleButtonClick}
    ></button>
  );
};

export default Button;
