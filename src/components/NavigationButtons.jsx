import PropTypes from "prop-types";
import PreviousButton from "../assets/svg/PreviousButton";
import NextButton from "../assets/svg/NextButton";

const NavigationButtons = ({ handleClickLeftArrow, handleClickRightArrow }) => {
  return (
    <div className="flex items-center gap-x-3.5">
      <PreviousButton handleClick={handleClickLeftArrow} />
      <NextButton handleClick={handleClickRightArrow} />
    </div>
  );
};

NavigationButtons.propTypes = {
  handleClickLeftArrow: PropTypes.func,
  handleClickRightArrow: PropTypes.func,
}

export default NavigationButtons;
