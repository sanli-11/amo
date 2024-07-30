import PropTypes from "prop-types";
import SampleImage from "../assets/img/sample/13.png";
import ProductImageContainer from "./ProductImageContainer";

const ProductPreview = ({ discount, name, brand, price }) => {
  const discountSticker = (
    <div className="w-14 h-14 absolute top-0 right-0 flex items-center justify-center rounded-2xl bg-amber-600 text-white">
      <span>-{discount}%</span>
    </div>
  );

  const prices = (
    <div className="flex flex-col justify-center items-end">
      <span className="text-xs text-stone-400 line-through decoration-1 xl:decoration-2 decoration-stone-400">
        {`$${price}`}
      </span>
      <span>{`$${Math.floor(price - price / discount)}`}</span>
    </div>
  );

  return (
    <div className="relative flex flex-col justify-start items-center p-0.5">
      <ProductImageContainer image={SampleImage} name={name} />
      {discount && discountSticker}
      <div className="w-full p-1.5 flex justify-between items-center">
        <div className="flex flex-col justify-start">
          <h6 className="inline">{name}</h6>
          <span className="text-xs text-stone-400">{brand}</span>
        </div>
        {discount ? prices : <span>{`$${price}`}</span>}
      </div>
    </div>
  );
};

ProductPreview.propTypes = {
  discount: PropTypes.number,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
};

export default ProductPreview;
