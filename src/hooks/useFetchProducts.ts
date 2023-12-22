import { useEffect } from 'react';
import useProductsStore from 'stores/useProductsStore';

const useFetchProducts = ({ categoryId } : {categoryId ?: string}) => {
  const products = useProductsStore((state) => state.products);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts({ categoryId });
  }, [categoryId]);

  return {
    products,
  };
};

export default useFetchProducts;
