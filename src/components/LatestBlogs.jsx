import PropTypes from "prop-types";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import NavigationButtons from "./NavigationButtons";
import BlogPreview from "./BlogPreview";

const LatestBlogs = ({ blogs }) => {
  const handlePrev = () => {
    //* TODO
  };

  const handleNext = () => {
    //* TODO
  };

  return (
    <Section padded>
      <SectionTitle title={"Latest Blogs"}>
        <NavigationButtons
          handleClickLeftArrow={handlePrev}
          handleClickRightArrow={handleNext}
        />
      </SectionTitle>
      <BlogPreview blogs={blogs} />
    </Section>
  );
};

LatestBlogs.propTypes = {
  blogs: PropTypes.object,
};

export default LatestBlogs;
