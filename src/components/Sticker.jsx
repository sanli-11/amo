import PropTypes from "prop-types";

const Sticker = ({className, discount}) => {
  return (
    <div
      className={`${className} w-12 h-6 flex items-center justify-center rounded-md ${discount ? "bg-amber-500" : "bg-rose-300"} text-white`}
    >
      <span className="text-xs">
        {discount ? `-${discount}%` : "New"}
      </span>
    </div>
  )
}

Sticker.propTypes = {
  className: PropTypes.string,
  discount: PropTypes.number,
}

export default Sticker
