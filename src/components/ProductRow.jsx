import ProductPreview from "./ProductPreview";

const ProductRow = () => {
  return (
    <div className="pl-2.5 grid grid-cols-3 xl:grid-col-4 gap-20 font-secondary">
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
    </div>
  );
};

export default ProductRow;
