import PropTypes from "prop-types";

const Button = ({ className, children, handleClick }) => {
  return (
    <button
      type="button"
      className={`${className} w-44 px-5 py-2.5 border rounded-lg bg-yellow-500`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
