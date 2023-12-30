import useAccessToken from 'hooks/useAccessToken';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Options from './Options';
import Quantity from './Quantity';
import Price from './Price';
import SubmitButton from './SubmitButton';

const Container = styled.div`
  margin-bottom: 2rem;
  line-height: 1.8;
`;

function AddToCartForm() {
  const { accessToken } = useAccessToken();
  // 로그인 이후에 원래있던 주소로 돌아갈 수 있도록 처리해주면 좋다.
  // /login?redirect_to=/products1234
  if (!accessToken) {
    return (
      <Container>
        주문하려면
        {' '}
        <Link to="/login">로그인</Link>
        하세요
      </Container>
    );
  }
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
