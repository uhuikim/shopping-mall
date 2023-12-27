import { apiService } from 'services/ApiService';
import {
  ProductDetail, ProductOptionItem, nullProductDetail,
} from 'types';
import { create } from 'zustand';

type State = {
  quantity: number,
  done : boolean,
  product : ProductDetail,
  selectedOptionItems: ProductOptionItem[],
  price:number
}

type Actions = {
  changeQuantity: (quantity : number) => void,
  addToCart : () =>void,
  changeOptionItem:({ optionId, optionItemId } : {
    optionId : string, optionItemId : string
  })=>void,
  setProduct : (product : ProductDetail)=>void
}

// 강의에서는 getter함수를 만들어서 Price를 가져왔지만 zustand에는 getter기능이 없다.
// state가 변경 될 때 그 값을 반영해서 계산해주는 getter 함수를 만들 수 없어...그냥 price state를 만들었다.
/* get price(){
  return this.product.price * this.quantity
}
*/
const useProductFormStore = create<State & Actions>((set, get) => ({
  quantity: 1,
  done: false,
  product: nullProductDetail,
  selectedOptionItems: [],
  price: 0,
  setProduct: (product : ProductDetail) => {
    set((state) => ({
      product,
      productId: product.id,
      selectedOptionItems: product.options.map((i) => i.items[0]),
      price: product.price * state.quantity,
      done: false,
    }));
  },
  changeQuantity: (quantity : number) => {
    if (quantity <= 0) {
      return;
    }

    if (quantity > 10) {
      return;
    }

    set((state) => ({ quantity, price: state.price * quantity }));
  },

  addToCart: async () => {
    set(() => ({
      done: false,
    }));
    const {
      product, selectedOptionItems, quantity,
    } = get();

    await apiService.addProductToCart({
      productId: product.id,
      options: product.options.map((option, index) => ({
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
