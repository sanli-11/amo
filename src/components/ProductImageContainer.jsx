import PropTypes from "prop-types";

const ProductImageContainer = ({ image, name }) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <img src={image} alt={name} width={260} height={462} />
    </div>
  );
};

ProductImageContainer.propTypes = {
  image: PropTypes.node,
  name: PropTypes.string,
};

export default ProductImageContainer;
