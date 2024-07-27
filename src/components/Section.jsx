import PropTypes from "prop-types";

const Section = ({ className, children, padded }) => {
  return (
    <section
      className={`${String(className)} ${padded ? "mt-16 mb-28 mx-20" : "mb-10"}`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  padded: PropTypes.bool,
};

export default Section;
