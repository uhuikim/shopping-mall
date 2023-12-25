import Button from 'components/ui/Button';
import useProductFormStore from 'stores/useProductFormStore';

export default function SubmitButton() {
  const { done, addToCart } = useProductFormStore((state) => ({
    done: state.done,
    addToCart: state.addToCart,
  }));

  const handleClick = () => {
    addToCart();
  };

  if (done) {
    return (
      <p>장바구니에 담았습니다</p>
    );
  }

  return (
    <Button onClick={handleClick}>
      장바구니에 담기
    </Button>
  );
}
