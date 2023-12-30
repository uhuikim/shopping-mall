import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import LoginForm from 'components/login/LoginForm';
import useLoginFormStore from 'stores/useLoginFormStore';

export default function LoginPage() {
  const navigate = useNavigate();

  const { reset, accessToken } = useLoginFormStore();

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    if (accessToken) {
      reset();
      navigate('/');
    }
  }, [accessToken, reset, navigate]);

  return (
    <LoginForm />
  );
}
