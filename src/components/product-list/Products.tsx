import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductSummary } from 'types';
import Product from './Product';

type ProductsProps = {
  products: ProductSummary[]
}

const Container = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 20%;
    padding: 1rem;
  }
a {
    display: block;
    text-decoration: none;
  }
`;

function Products({ products }: ProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Products;
