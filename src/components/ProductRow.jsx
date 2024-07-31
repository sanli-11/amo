import PropTypes from "prop-types";
import ProductPreview from "./ProductPreview";

const ProductRow = ({ productsList }) => {
  return (
    <div className="pl-2.5 grid grid-cols-3 xl:grid-cols-4 gap-16 font-secondary">
      {productsList.map((prod) => {
        return (
          <ProductPreview
            key={prod.id}
            latest={prod.latest}
            name={prod.name}
            brand={prod.brand}
            price={prod.price}
            discount={prod.discount}
          />
        );
      })}
    </div>
  );
};

ProductRow.propTypes = {
  productsList: PropTypes.object,
};

export default ProductRow;
