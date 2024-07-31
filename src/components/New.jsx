import PropTypes from "prop-types";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import NavigationButtons from "./NavigationButtons";
import ProductRow from "./ProductRow";

const New = ({ products }) => {
  const length = products.length;
  const cols = 4;
  const prodListExists = length > 0;
  const prodToShow = prodListExists ? (length < cols ? length + 1 : cols) : 0;

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
      <ProductRow
        productsList={products
          .filter((prod) => prod.latest)
          .slice(0, prodToShow)}
      />
    </Section>
  );
};

New.propTypes = {
  products: PropTypes.object,
};

export default New;
