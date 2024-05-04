import AxiosProxy from './AxiosProxy';

export const AuthUsingRefreshToken = async () => {
  const token = localStorage.getItem('rft-btt');

  if (token == null) return false;

  try {
    const response = await AxiosProxy('/auth/refresh', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // return response
    return response.data;
  } catch (err) {
    return false;
  }
};

export const cleanExpiredSession = () => {
  window.localStorage.removeItem('x-token');
  window.localStorage.removeItem('rft-btt');
};
