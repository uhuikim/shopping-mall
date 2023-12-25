import useProductFormStore from 'stores/useProductFormStore';

const useProductFormStoreHooks = () => {
  const store = useProductFormStore();

  return store;
};

export default useProductFormStoreHooks;
