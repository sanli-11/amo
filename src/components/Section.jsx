import PropTypes from "prop-types";

const Section = ({ className, children, padded }) => {
  return (
    <section
      className={`${String(className)} ${padded ? "pt-16 pb-[4.8765rem] px-20" : "pb-10"}`}
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
