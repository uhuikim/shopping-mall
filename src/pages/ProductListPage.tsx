import Products from 'components/product-list/Products';
import useFetchProducts from 'hooks/useFetchProducts';
import { useSearchParams } from 'react-router-dom';

function ProductListPage() {
  const [params] = useSearchParams();
  // 값이 없으면 null로 들어온다. type을 string || null로 해주는 것 보다는 ?를 사용하는게 더 편리해서 undefined를 넣어줌
  const categoryId = params.get('categoryId') ?? undefined;

  const { products } = useFetchProducts({ categoryId });

  return (
    <div>
      <h2>Product</h2>
      <Products products={products} />
    </div>
  );
}

export default ProductListPage;
