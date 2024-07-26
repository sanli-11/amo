import Section from "./Section";
import SectionTitle from "./SectionTitle";
import NavigationButtons from "./NavigationButtons";
import ProductRow from "./ProductRow";

const Deals = () => {
  const handlePrev = () => {
    //* TODO
  };

  const handleNext = () => {
    //* TODO
  };

  return (
    <Section className="flex flex-col gap-y-10 xl:gap-y-9" padded>
      <SectionTitle title={"Hot Deals"}>
        <NavigationButtons
          handleClickLeftArrow={handlePrev}
          handleClickRightArrow={handleNext}
        />
      </SectionTitle>
      <ProductRow />
    </Section>
  );
};

export default Deals;
