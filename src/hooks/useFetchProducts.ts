import { ProductSummary } from 'types';
import { useFetch } from 'usehooks-ts';

type Data = {
    products : ProductSummary[]
}

const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

const useFetchProducts = () => {
  const { data } = useFetch<Data>(`${apiBaseUrl}/products`);

  return {
    products: data?.products ?? [],
  };
};

export default useFetchProducts;
