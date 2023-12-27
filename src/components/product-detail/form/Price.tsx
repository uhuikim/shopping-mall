import useProductFormStore from 'stores/useProductFormStore';
import styled from 'styled-components';
import numberFormat from 'utils/numberFormat';

const Container = styled.div`
  margin-block: .2rem ;
  color: ${(props) => props.theme.colors.primary};
`;

export default function Price() {
  const price = useProductFormStore((state) => state.price);

  return (
    <Container>
      {/** product.price * quantity 는 비즈니스 로직이다. 이부분을 아예 store로 빼준다. */}
      {numberFormat(price)}
      원
    </Container>
  );
}
