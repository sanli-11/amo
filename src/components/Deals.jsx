import PropTypes from "prop-types";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import NavigationButtons from "./NavigationButtons";
import ProductRow from "./ProductRow";

const Deals = ({ products }) => {
  const handlePrev = () => {
    //* TODO
  };

  const handleNext = () => {
    //* TODO
  };

  return (
    <Section className="flex flex-col gap-y-10 xl:gap-y-12" padded>
      <SectionTitle title={"Hot Deals"}>
        <NavigationButtons
          handleClickLeftArrow={handlePrev}
          handleClickRightArrow={handleNext}
        />
      </SectionTitle>
      <ProductRow productsList={products.filter((prod) => prod.discount)} />
    </Section>
  );
};

Deals.propTypes = {
  products: PropTypes.object,
};

export default Deals;
