import Section from "./Section";
import SectionTitle from "./SectionTitle";
import NavigationButtons from "./NavigationButtons";

const Deals = () => {
  const handlePrev = () => {
    //* TODO
  };

  const handleNext = () => {
    //* TODO
  };

  return (
    <Section className="gap-y-12" padded>
      <SectionTitle title={"Hot Deals"}>
        <NavigationButtons
          handleClickLeftArrow={handlePrev}
          handleClickRightArrow={handleNext}
        />
      </SectionTitle>
    </Section>
  );
};

export default Deals;
