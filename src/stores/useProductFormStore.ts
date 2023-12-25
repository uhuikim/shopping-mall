import { apiService } from 'services/ApiService';
import {
  ProductDetail, ProductOption, ProductOptionItem, nullProductDetail,
} from 'types';
import { create } from 'zustand';

type State = {
  quantity: number,
  done : boolean,
  productId : string,
  product : ProductDetail,
  options : ProductOption[],
  selectedOptionItems: ProductOptionItem[]
}

type Actions = {
  changeQuantity: (quantity : number) => void,
  addToCart : () =>void,
  changeOptionItem:({ optionId, optionItemId } : {
    optionId : string, optionItemId : string
  })=>void
}

const useProductFormStore = create<State & Actions>((set) => ({
  quantity: 1,
  done: false,
  productId: '',
  options: [],
  product: nullProductDetail,
  selectedOptionItems: [],
  changeQuantity: (quantity : number) => {
    if (quantity <= 0) {
      return;
    }

    if (quantity > 10) {
      return;
    }
    set(() => ({ quantity }));
  },

  addToCart: async () => {
    set(() => ({
      done: false,
    }));

    await apiService.addProductToCart({
      productId,
      options: options.map((option, index) => ({
        id: option.id,
        itemId: selectedOptionItems[index].id,
      })),
      quantity,
    });

    set(() => ({
      quantity: 1,
      done: true,
    }));
  },

  changeOptionItem: ({ optionId, optionItemId } : {
    optionId : string, optionItemId : string
  }) => {
    set((state) => ({
      selectedOptionItems: state.product.options.map((option, index) => {
        const item = state.selectedOptionItems[index];
        return option.id !== optionId
          ? item
          : option.items.find((i) => i.id === optionItemId) ?? item;
      }),
    }));
  },
}));

export default useProductFormStore;
