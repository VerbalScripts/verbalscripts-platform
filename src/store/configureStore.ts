import { atom, selector } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    isAuth: false,
    email: '',
    firstName: '',
    lastName: '',
    userId: '',
  },
});

export const isAuthenticated = selector({
  key: 'isAuthGetter',
  get: ({ get }) => get(userState).isAuth,
});

export const getUser = selector({
  key: 'userSelector',
  get: ({ get }) => get(userState),
});
