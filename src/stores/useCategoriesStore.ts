import { apiService } from 'services/ApiService';
import { Category } from 'types';
import { create } from 'zustand';

type State = {
  categories: Category[]
}

type Actions = {
  fetchCategories: () => void
}

const useCategoriesStore = create<State & Actions>((set) => ({
  categories: [],
  fetchCategories: async () => {
    const categories = await apiService.fetchCategories();
    set(() => ({ categories }));
  },
}));

export default useCategoriesStore;
