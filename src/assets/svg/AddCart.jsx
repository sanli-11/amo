import PropTypes from "prop-types";

const AddCart = ({className, handleClick}) => {
  return (
    <button type="button" onClick={handleClick} className={className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 8.63005C16.09 8.63005 15.75 8.29005 15.75 7.88005V6.50005C15.75 5.45006 15.3 4.43005 14.52 3.72005C13.73 3.00005 12.71 2.67005 11.63 2.77005C9.83 2.94005 8.25 4.78005 8.25 6.70005V7.67005C8.25 8.08005 7.91 8.42005 7.5 8.42005C7.09 8.42005 6.75 8.08005 6.75 7.67005V6.69005C6.75 4.00005 8.92 1.52005 11.49 1.27005C12.99 1.13005 14.43 1.60005 15.53 2.61005C16.62 3.60005 17.25 5.02005 17.25 6.50005V7.88005C17.25 8.29005 16.91 8.63005 16.5 8.63005Z"
          fill="#292D32"
        />
        <path
          d="M14.9998 22.75H8.99982C4.37982 22.75 3.51982 20.6 3.29982 18.51L2.54982 12.52C2.43982 11.44 2.39982 9.89 3.44982 8.73C4.34982 7.73 5.83982 7.25 7.99982 7.25H15.9998C18.1698 7.25 19.6598 7.74 20.5498 8.73C21.5898 9.89 21.5598 11.44 21.4498 12.5L20.6998 18.51C20.4798 20.6 19.6198 22.75 14.9998 22.75ZM7.99982 8.75C6.30982 8.75 5.14982 9.08 4.55982 9.74C4.06982 10.28 3.90982 11.11 4.03982 12.35L4.78982 18.34C4.95982 19.94 5.39982 21.26 8.99982 21.26H14.9998C18.5998 21.26 19.0398 19.95 19.2098 18.36L19.9598 12.35C20.0898 11.13 19.9298 10.3 19.4398 9.75C18.8498 9.08 17.6898 8.75 15.9998 8.75H7.99982Z"
          fill="#292D32"
        />
        <path
          d="M15.4202 13.1499C14.8602 13.1499 14.4102 12.6999 14.4102 12.1499C14.4102 11.5999 14.8602 11.1499 15.4102 11.1499C15.9602 11.1499 16.4102 11.5999 16.4102 12.1499C16.4102 12.6999 15.9702 13.1499 15.4202 13.1499Z"
          fill="#292D32"
        />
        <path
          d="M8.42016 13.1499C7.86016 13.1499 7.41016 12.6999 7.41016 12.1499C7.41016 11.5999 7.86016 11.1499 8.41016 11.1499C8.96016 11.1499 9.41016 11.5999 9.41016 12.1499C9.41016 12.6999 8.97016 13.1499 8.42016 13.1499Z"
          fill="#292D32"
        />
      </svg>
    </button>
  );
};

AddCart.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
}

export default AddCart;
