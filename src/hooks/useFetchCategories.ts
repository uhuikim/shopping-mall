import useCategoriesStore from 'stores/useCategoriesStore';
import { useEffectOnce } from 'usehooks-ts';

const useFetchCategories = () => {
  const categories = useCategoriesStore((state) => state.categories);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);

  useEffectOnce(() => {
    fetchCategories();
  });

  return {
    categories,
  };
};

export default useFetchCategories;
