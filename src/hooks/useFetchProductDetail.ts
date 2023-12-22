import { useEffect } from 'react';
import useProductDetailStore from 'stores/useProductDetailStore';

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
