import { useEffect } from 'react';
import useProductDetailStore from 'stores/useProductDetailStore';
import useProductFormStore from 'stores/useProductFormStore';

const useFetchProductDetail = ({ productId } : {productId ?: string} = {}) => {
  const {
    product, loading, error, fetchProduct,
  } = useProductDetailStore((state) => (
    {
      product: state.product,
      loading: state.loading,
      error: state.error,
      fetchProduct: state.fetchProduct,
    }
  ));

  const setProduct = useProductFormStore((state) => state.setProduct);

  useEffect(() => {
    setProduct(product);
  }, []);

  useEffect(() => {
    fetchProduct({ productId });
  }, [productId]);

  return {
    product,
    loading,
    error,
  };
};

export default useFetchProductDetail;
