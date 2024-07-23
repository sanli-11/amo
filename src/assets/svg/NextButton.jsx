import PropTypes from "prop-types";

const NextButton = ({ color = "black", handleClick }) => {
  return (
    <button type="button">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <path
          d="M14.43 5.92999L20.5 12L14.43 18.07"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.5 12H20.33"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

NextButton.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

export default NextButton;
