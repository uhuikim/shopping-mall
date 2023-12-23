import Cart from 'components/cart/Cart';
import useFetchCart from 'hooks/useFetchCart';

function CartPage() {
  const { cart } = useFetchCart();

  if (!cart) {
    return null;
  }

  return (
    <div>
      <h2>장바구니</h2>
      <Cart cart={cart} />
    </div>
  );
}

export default CartPage;
