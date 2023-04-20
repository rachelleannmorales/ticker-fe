export const login = (username: string, password: string ) => {
  return { type: 'LOGIN_REQUEST', payload: { username, password } };
};

export const refreshTokens = () => {
  return { type: 'REFRESH_TOKENS' };
};

export const logout = () => {
  return { type: 'LOGOUT_REQUEST' };
};

export const restoreSession = () => {
  return { type: 'SESSION_RESTORE' };
};

export default {
  login,
  refreshTokens,
  logout,
  restoreSession
};