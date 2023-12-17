import axios from 'axios';
import { ProductSummary } from 'types';
import { create } from 'zustand';

type State = {
  products: ProductSummary[]
}

type Actions = {
  fetchProducts: () => void

}
const apiBaseUrl = 'https://shop-demo-api-01.fly.dev';

const useProductsStore = create<State & Actions>((set) => ({
  products: [],
  fetchProducts: async () => {
    const { data } = await axios.get(`${apiBaseUrl}/products`);
    const { products } = data;
    set(() => ({ products }));
  },
}));

export default useProductsStore;
