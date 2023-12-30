import { useEffect } from 'react';
import { apiService } from 'services/ApiService';
import { useLocalStorage } from 'usehooks-ts';

export default function useAccessToken() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  return { accessToken, setAccessToken };
}
