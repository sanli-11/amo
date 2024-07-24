import SampleImage from "../assets/img/sample/13.png";

const ProductPreview = () => {
  return (
    <div className="relative flex flex-col justify-start items-center p-0.5">
      <div className="w-14 h-14 absolute top-0 right-0 flex items-center justify-center rounded-2xl bg-amber-600 text-white">
        -10%
      </div>
      <img src={SampleImage} alt="Sample Image" width={260} height={462} />
      <div className="w-full p-1.5 flex justify-between items-center">
        <div className="flex flex-col justify-start">
          <h6 className="inline">Watch Series 8</h6>
          <span className="text-xs text-stone-400">Apple</span>
        </div>
        <div className="flex flex-col justify-center items-end">
          <span className="text-xs text-stone-400 line-through decoration-1 xl:decoration-2 decoration-stone-400">
            $399
          </span>
          <span>$399</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
