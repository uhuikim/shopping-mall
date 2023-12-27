import { ChangeFunction } from 'types';
import useProductFormStore from 'stores/useProductFormStore';
import Option from './Option';

export default function Options() {
  const { product, selectedOptionItems, changeOptionItem } = useProductFormStore();

  const handleChange: ChangeFunction = ({ optionId, optionItemId }) => {
    changeOptionItem({ optionId, optionItemId });
  };

  return (
    <div>
      {product.options.map((option, index) => (
        <Option
          key={option.id}
          option={option}
          selectedItem={selectedOptionItems[index]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}
