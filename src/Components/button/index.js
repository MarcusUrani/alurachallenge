import "./style.css";

const Button = ({ children, onClickFunction, nameClass, buttonType }) => {
  return (
    <button
      className={`button ${nameClass}`}
      type={buttonType}
      onClick={onClickFunction}
    >
      {children}
    </button>
  );
};

export default Button;
