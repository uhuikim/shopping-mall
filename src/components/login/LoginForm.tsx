import React, { useEffect } from 'react';

import styled from 'styled-components';

import TextBox from 'components/ui/TextBox';
import Button from 'components/ui/Button';
import useAccessToken from 'hooks/useAccessToken';
import useLoginFormStore from 'stores/useLoginFormStore';

const Container = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-size: 4rem;
  }

  button {
    margin-left: 10.5rem;
  }

  p {
    margin-block: 1rem;
  }
`;

export default function LoginForm() {
  const { setAccessToken } = useAccessToken();

  const {
    email, password, error,
    accessToken, changeEmail, changePassword, login,
  } = useLoginFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken, setAccessToken]);

  const handleChangeEmail = (value: string) => {
    changeEmail(value);
  };

  const handleChangePassword = (value: string) => {
    changePassword(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };
  const isValid = () => email.includes('@') && !!password;

  return (
    <Container>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <TextBox
          label="E-mail"
          placeholder="tester@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextBox
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <Button type="submit" disabled={!isValid}>
          로그인
        </Button>
        {error && (
          <p>로그인 실패</p>
        )}
      </form>
    </Container>
  );
}
