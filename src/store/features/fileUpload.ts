import { atom, selector } from 'recoil';

const filesInitArr: File[] = [];

export const filesArr = atom({
  key: 'filesList',
  default: filesInitArr,
});

const progress: ProgressTracker[] = [];

export const progressTracker = atom({
  key: 'progressTracker',
  default: progress,
});

export const currentUploadFileIndex = atom({
  key: 'currentUploadFileIndex',
  default: 0,
});

export const uploadProgressStats = selector({
  key: 'uploadProgress',
  get: ({ get }) => {
    const progress: ProgressTracker[] = get(progressTracker);
    let complete = 0;

    progress.forEach((item) => {
      if (item.isComplete) {
        complete = complete + 1;
      }
    });
    return {
      complete: complete,
      total: progress.length,
    };
  },
});

export const showProgressBar = atom({
  key: 'progressBar',
  default: false,
});

// export const isAuthenticated = selector({
//   key: 'isAuthGetter',
//   get: ({ get }) => get(fileUploadState).isAuth,
// });

// export const getUser = selector({
//   key: 'userSelector',
//   get: ({ get }) => get(fileUploadState),
// });
