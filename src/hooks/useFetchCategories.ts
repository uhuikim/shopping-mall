import { useEffect } from 'react';
import useCategoriesStore from 'stores/useCategoriesStore';

const useFetchCategories = () => {
  const categories = useCategoriesStore((state) => state.categories);
  const fetchCategories = useCategoriesStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
  };
};

export default useFetchCategories;
