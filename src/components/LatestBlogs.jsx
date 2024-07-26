import Section from "./Section";
import SectionTitle from "./SectionTitle";
import NavigationButtons from "./NavigationButtons";
import BlogPreview from "./BlogPreview";

const LatestBlogs = () => {
  const handlePrev = () => {
    //* TODO
  };

  const handleNext = () => {
    //* TODO
  };

  return (
    <Section className="flex flex-col gap-y-10 xl:gap-y-9" padded>
      <SectionTitle title={"Latest Blogs"}>
        <NavigationButtons
          handleClickLeftArrow={handlePrev}
          handleClickRightArrow={handleNext}
        />
      </SectionTitle>
      <BlogPreview />
    </Section>
  );
};

export default LatestBlogs;
