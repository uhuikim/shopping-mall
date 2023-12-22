import ProductDetail from 'components/product-detail/ProductDetail';
import useFetchProductDetail from 'hooks/useFetchProductDetail';
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const params = useParams();

  const { loading, error } = useFetchProductDetail({
    productId: String(params.id),
  });

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <ProductDetail />
  );
}
