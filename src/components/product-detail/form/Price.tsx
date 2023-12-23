import useProductDetailStore from 'stores/useProductDetailStore';
import useProductFormStore from 'stores/useProductFormStore';
import styled from 'styled-components';
import numberFormat from 'utils/numberFormat';

const Container = styled.div`
  margin-block: .2rem ;
`;

export default function Price() {
  const product = useProductDetailStore((state) => state.product);
  const quantity = useProductFormStore((state) => state.quantity);

  return (
    <Container>
      {numberFormat(product.price * quantity)}
      원
    </Container>
  );
}
