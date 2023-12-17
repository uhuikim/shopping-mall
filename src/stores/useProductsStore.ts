import { apiService } from 'services/ApiService';
import { ProductSummary } from 'types';
import { create } from 'zustand';

type State = {
  products: ProductSummary[]
}

type Actions = {
  fetchProducts: () => void

}

const useProductsStore = create<State & Actions>((set) => ({
  products: [],
  fetchProducts: async () => {
    const products = await apiService.fetchProducts();
    set(() => ({ products }));
  },
}));

export default useProductsStore;
