import PropTypes from "prop-types";
import titleBar from "../assets/svg/titleBar.svg";

const SectionTitle = ({ children, title }) => {
  return (
    <div className="flex items-center justify-between pl-5">
      <div className="flex items-center gap-x-2">
        <img src={titleBar} alt="Title" width={20} height={1} />
        <h2 className="text-2xl">{title}</h2>
      </div>
      {children}
    </div>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SectionTitle;
