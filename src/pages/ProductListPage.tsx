import Products from 'components/product-list/Products';
import useFetchProducts from 'hooks/useFetchProducts';

function ProductListPage() {
  const { products } = useFetchProducts();

  return (
    <div>
      <h2>Product</h2>
      <Products products={products} />
    </div>
  );
}

export default ProductListPage;
