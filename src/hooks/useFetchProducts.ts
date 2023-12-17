import useProductsStore from 'stores/useProductsStore';
import { useEffectOnce } from 'usehooks-ts';

const useFetchProducts = () => {
  const products = useProductsStore((state) => state.products);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);

  useEffectOnce(() => {
    fetchProducts();
  });

  return {
    products: products ?? [],
  };
};

export default useFetchProducts;
