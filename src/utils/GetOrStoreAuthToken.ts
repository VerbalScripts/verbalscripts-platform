

export const GetOrStoreAuthToken = ( utoken?: string ) => {
  if (utoken) {
    localStorage.setItem('x-token', utoken);
    return true;
  }
  const token = localStorage.getItem('x-token');

  if (!token) return null;
  return token;
};
