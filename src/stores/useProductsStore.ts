import { apiService } from 'services/ApiService';
import { ProductSummary } from 'types';
import { create } from 'zustand';

type State = {
  products: ProductSummary[]
}

type Actions = {
  fetchProducts: ({ categoryId } : {categoryId ?:string}) => void

}

const useProductsStore = create<State & Actions>((set) => ({
  products: [],
  fetchProducts: async ({ categoryId }) => {
    const products = await apiService.fetchProducts({ categoryId });
    set(() => ({ products }));
  },
}));

export default useProductsStore;
