import { apiService } from 'services/ApiService';
import { ProductDetail, nullProductDetail } from 'types';
import { create } from 'zustand';

type State = {
  product: ProductDetail,
  loading : boolean,
  error : boolean
}

type Actions = {
  fetchProduct: ({ productId } : {productId ?:string}) => void,
}

const useProductDetailStore = create<State & Actions>((set) => ({
  product: nullProductDetail,
  loading: false,
  error: false,
  fetchProduct: async ({ productId }) => {
    set(() => ({
      product: nullProductDetail,
      loading: true,
      error: false,
    }));

    try {
      const product = await apiService.fetchProduct({ productId });
      set(() => ({
        product,
        loading: false,
        error: false,
      }));
    } catch (err) {
      set(() => ({
        product: nullProductDetail,
        loading: false,
        error: true,
      }));
    }
  },
}));

export default useProductDetailStore;
