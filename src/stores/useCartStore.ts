import { apiService } from 'services/ApiService';
import { Cart } from 'types';
import { create } from 'zustand';

type State = {
  cart: Cart | null
}

type Actions = {
  fetchCart: () => void
}

const useCartStore = create<State & Actions>((set) => ({
  cart: null,
  fetchCart: async () => {
    const cart = await apiService.fetchCart();
    set(() => ({ cart }));
  },
}));

export default useCartStore;
