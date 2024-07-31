import PropTypes from "prop-types";

const DiscountedPrice = ({price, discount}) => {
  return (
    <div className="flex flex-col justify-center items-end">
      <span className="text-xs text-stone-400 line-through decoration-1 xl:decoration-2 decoration-stone-400">
        {`$${price}`}
      </span>
      <span>{`$${Math.floor(price - price / discount)}`}</span>
    </div>
  );
};

DiscountedPrice.propTypes = {
  price: PropTypes.number,
  discount: PropTypes.number,
}

export default DiscountedPrice;
