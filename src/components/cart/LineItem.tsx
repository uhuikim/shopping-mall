import { Link } from 'react-router-dom';
import { LineItem as LineItemType } from 'types';
import numberFormat from 'utils/numberFormat';
import Options from './Options';

type LineItemProp = {
  lineItem: LineItemType
}
function LineItem({ lineItem }: LineItemProp) {
  return (
    <tr>
      <td>
        <Link to={`/products/${lineItem.product.id}`}>
          {lineItem.product.name}
        </Link>
        <Options options={lineItem.options} />
      </td>
      <td>
        {numberFormat(lineItem.unitPrice)}
        원
      </td>
      <td>
        {numberFormat(lineItem.quantity)}
      </td>
      <td>
        {numberFormat(lineItem.totalPrice)}
        원
      </td>
    </tr>
  );
}

export default LineItem;
