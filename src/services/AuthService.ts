import axios from 'axios';
import { AUTH_API } from '../constants';
import Cookies from 'js-cookie';

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';

axios.defaults.headers.common = {
  "Content-Type": 'application/x-www-form-urlencoded',
  client: 'cafu',
  Authorization: 'Basic c3VwZXItY2xpZW50OnN1cGVyLXNlY3JldA=='
}

export const login = async (username: string, password: string) => {
  return await axios.post(AUTH_API || '', {}, {
    params: {
      grant_type: 'password',
      username,
      password
    }
  });
}

export const refreshAccessToken = async () => {
  const refresh_token = getRefreshToken();
  return await axios.post(AUTH_API || '', {}, {
    params: {
      grant_type: 'refresh_token',
      refresh_token
    }
  });
}

export const setTokens = async (access_token: string, refresh_token: string) => {
  return await new Promise(function(resolve) {
    const now = new Date();
    const minutes = 10;
    now.setTime(now.getTime() + minutes * 60 * 1000);
    Cookies.set(ACCESS_TOKEN, access_token, { expires: now });
    Cookies.set(REFRESH_TOKEN, refresh_token);
    resolve({data:{access_token, refresh_token}});
  });
}

export const removeTokens = async () => {
  return await new Promise(function(resolve: any) {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(REFRESH_TOKEN);
    resolve();
  });
}

export const getAccessToken = () => Cookies.get(ACCESS_TOKEN);
export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN);

export default  {
  login,
  refreshAccessToken,
  setTokens,
  getAccessToken
};
