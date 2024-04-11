export const GetOrStoreAuthToken = (utoken?: string) => {
  if (typeof window != 'undefined') {
    if (utoken) {
      window.localStorage.setItem('x-token', utoken);
      return true;
    }
    const token = window.localStorage.getItem('x-token');

    if (!token) return null;
    return token;
  }
  return null;
};
