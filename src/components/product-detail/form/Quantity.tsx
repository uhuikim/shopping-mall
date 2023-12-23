import Button from 'components/ui/Button';
import useProductFormStore from 'stores/useProductFormStore';
import styled from 'styled-components';

const Container = styled.div`
input{
  width : 5rem;
  text-align: center;
}
`;

export default function Quantity() {
  const { quantity, changeQuantity } = useProductFormStore((state) => ({
    quantity: state.quantity,
    changeQuantity: state.changeQuantity,
  }));

  const handleClickDecrease = () => {
    changeQuantity(quantity - 1);
  };

  const handleClickIncrease = () => {
    changeQuantity(quantity + 1);
  };

  return (
    <Container>
      <Button onClick={handleClickDecrease}>
        -
      </Button>
      <input type="text" value={quantity} readOnly />
      <Button onClick={handleClickIncrease}>
        +
      </Button>
    </Container>
  );
}
