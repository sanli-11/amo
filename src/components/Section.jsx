import PropTypes from "prop-types";

const Section = ({ className, children, padded, title }) => {
  return (
    <section className={`${{ className }} ${padded ? "py-12 px-20" : "pb-10"}`}>
      {padded && (
        <h2 className="flex items-center gap-x-2 text-lg">
          <img
            src="../assets/svg/titleBar.svg"
            alt="Title"
            width={20}
            height={1}
          />
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  padded: PropTypes.bool,
  title: PropTypes.string,
};

export default Section;
