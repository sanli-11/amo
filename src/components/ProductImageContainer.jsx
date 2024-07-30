import PropTypes from "prop-types";
import Wishlist from "../assets/svg/Wishlist";

const ProductImageContainer = ({ image, name }) => {
  return (
    <div className="relative">
      <img src={image} alt={name} width={260} height={462} />
      <div className="absolute top-3 right-2">
        <button type="button">
          <Wishlist />
        </button>
      </div>
    </div>
  );
};

ProductImageContainer.propTypes = {
  image: PropTypes.node,
  name: PropTypes.string,
};

export default ProductImageContainer;
