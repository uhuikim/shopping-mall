import Options from './Options';
import Quantity from './Quantity';
import Price from './Price';
import SubmitButton from './SubmitButton';

function AddToCartForm() {
  return (
    <div>
      <Options />
      <Quantity />
      <Price />
      <SubmitButton />
    </div>
  );
}

export default AddToCartForm;
