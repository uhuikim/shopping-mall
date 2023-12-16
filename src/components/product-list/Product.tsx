import { ProductSummary } from 'types';
import numberFormat from 'utils/numberFormat';
import styled from 'styled-components';

const Thumbnail = styled.img.attrs({
  alt: 'Thumbnail',
})`
  display : block;
  width : 100%;
  aspect-ratio : 1/1;
`;

// TODO : word break -keep all, ...처리, 툴팁으로 전체 글씨 보여주기

function Product({ product }: {
  product: ProductSummary
}) {
  return (
    <div>
      <Thumbnail src={product.thumbnail.url} />
      <div>{product.name}</div>
      <div>
        {numberFormat(product.price)}
        원
      </div>
    </div>
  );
}

export default Product;
