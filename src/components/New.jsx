import PropTypes from "prop-types";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import NavigationButtons from "./NavigationButtons";
import ProductRow from "./ProductRow";

const New = ({ products }) => {
  const handlePrev = () => {
    //* TODO
  };

  const handleNext = () => {
    //* TODO
  };

  return (
    <Section className="flex flex-col gap-y-10 xl:gap-y-9" padded>
      <SectionTitle title={"New Arrivals"}>
        <NavigationButtons
          handleClickLeftArrow={handlePrev}
          handleClickRightArrow={handleNext}
        />
      </SectionTitle>
      <ProductRow productsList={products.filter((prod) => prod.new)} />
    </Section>
  );
};

New.propTypes = {
  products: PropTypes.object,
};

export default New;
