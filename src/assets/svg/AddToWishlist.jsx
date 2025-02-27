import PropTypes from "prop-types";

const Wishlist = ({ className, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} flex items-center justify-center p-1 pt-1.5 border border-red-300 rounded-xl shadow-sm`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="#EF4444"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 18.0416C9.74169 18.0416 9.49169 18.0083 9.28335 17.9333C6.10002 16.8416 1.04169 12.9666 1.04169 7.24158C1.04169 4.32492 3.40002 1.95825 6.30002 1.95825C7.70835 1.95825 9.02502 2.50825 10 3.49159C10.975 2.50825 12.2917 1.95825 13.7 1.95825C16.6 1.95825 18.9584 4.33325 18.9584 7.24158C18.9584 12.9749 13.9 16.8416 10.7167 17.9333C10.5084 18.0083 10.2584 18.0416 10 18.0416ZM6.30002 3.20825C4.09169 3.20825 2.29169 5.01658 2.29169 7.24158C2.29169 12.9333 7.76669 16.0999 9.69169 16.7583C9.84169 16.8083 10.1667 16.8083 10.3167 16.7583C12.2334 16.0999 17.7167 12.9416 17.7167 7.24158C17.7167 5.01658 15.9167 3.20825 13.7084 3.20825C12.4417 3.20825 11.2667 3.79992 10.5084 4.82492C10.275 5.14159 9.74169 5.14159 9.50835 4.82492C8.73335 3.79159 7.56669 3.20825 6.30002 3.20825Z"
          fill="#EF4444"
        />
      </svg>
    </button>
  );
};

Wishlist.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Wishlist;
