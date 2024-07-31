import PropTypes from "prop-types";
import SampleImage from "../assets/img/sample/13.png";
import ProductImageContainer from "./ProductImageContainer";
import Sticker from "./Sticker";
import DiscountedPrice from "./DiscountedPrice";
import Wishlist from "../assets/svg/AddToWishlist";

const ProductPreview = ({ name, brand, price, discount, latest }) => {
  return (
    <div className="relative flex flex-col justify-start items-center pb-6 px-2.5 rounded-2xl bg-white">
      <ProductImageContainer image={SampleImage} name={name} />
      {discount && (
        <Sticker className="absolute top-4 left-4" discount={discount} />
      )}
      {latest && <Sticker className="absolute top-12 left-4" />}
      <Wishlist className="absolute top-4 right-4" />
      <div className="w-full px-1.5 flex justify-between items-center">
        <div className="flex flex-col justify-start">
          <h6 className="inline leading-7">{name}</h6>
          <span className="text-xs text-stone-400">{brand}</span>
        </div>
        {discount ? (
          <DiscountedPrice price={price} discount={discount} />
        ) : (
          <span>{`$${price}`}</span>
        )}
      </div>
    </div>
  );
};

ProductPreview.propTypes = {
  discount: PropTypes.number,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  latest: PropTypes.bool,
};

export default ProductPreview;
