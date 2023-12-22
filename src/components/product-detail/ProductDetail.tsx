import useProductDetailStore from 'stores/useProductDetailStore';
import styled from 'styled-components';
import Images from './Images';
import Description from './Description';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  aside {
    width: 38%;
  }

  article {
    width: 60%;
  }
`;

function ProductDetail() {
  const {
    product,
  } = useProductDetailStore((state) => ({ product: state.product }));

  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        {/* <AddToCartForm /> */}
        <Description value={product.description} />
      </article>
    </Container>
  );
}

export default ProductDetail;
