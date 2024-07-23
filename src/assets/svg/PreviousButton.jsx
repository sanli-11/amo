import PropTypes from "prop-types";

const PreviousButton = ({
  color = "black",
  handleClick
}) => {
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
          d="M9.57 5.92999L3.5 12L9.57 18.07"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.5 12H3.67001"
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

PreviousButton.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
};

export default PreviousButton;
