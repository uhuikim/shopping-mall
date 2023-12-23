import { useEffect } from 'react';
import useCartStore from 'stores/useCartStore';

const useFetchCart = () => {
  const cart = useCartStore((state) => state.cart);
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cart,
  };
};

export default useFetchCart;
