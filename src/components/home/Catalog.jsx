import { Container, Section } from "../../styles/styles";
import Title from "../common/Title";
import PropTypes from "prop-types";
import ProductList from "../product/ProductList";

const Catalog = ({ catalogTitle, products }) => {
  console.log(catalogTitle, products, "Catelogggggg"); // Debugging
  
  return (
    <Section>
      <Container >
        <div className="categories-content">
          <Title titleText={catalogTitle} />
          <ProductList products={products} />
        </div>
      </Container>
    </Section>
  );
};

// ✅ Define propTypes before export
Catalog.propTypes = {
  catalogTitle: PropTypes.string.isRequired, // Ensure it's always a string
  products: PropTypes.array.isRequired, // Ensure it's always an array
};

export default Catalog;
