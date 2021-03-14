import "./Button.css";

const Button = ({ name, type, onClick }) => {
  return (
    <>
      <button className="Button" type={type} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Button;
