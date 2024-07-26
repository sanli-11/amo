import ProductPreview from "./ProductPreview";

const ProductRow = () => {
  return (
    <div className="pl-2.5 grid grid-cols-3 xl:grid-col-4 gap-20 font-secondary">
      {watchesData.map((watch) => (
        <ProductPreview
          key={watch.id}
          name={watch.name}
          brand={watch.brand}
          price={watch.price}
          discount={watch.discount}
        />
      ))}
    </div>
  );
};

export default ProductRow;
