import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getOrStoreAuthToken = (utoken?: string) => {
  if (utoken) {
    localStorage.setItem('x-token', utoken);
    return true;
  }
  const token = localStorage.getItem('x-token');

  if (!token) return null;
  return token;
};

const initialState = {
  loading: false,
  folders: [], // store user directories
  selectedFolderId: null, // follow currently selected folder
  files: [], // store user directories
  addFiles: [], // store user directories
  error: null,
};

const uploadsSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    createFolder() {},
    updateFiles(state, action: PayloadAction<[]>) {
      state.files = action.payload;
    },
  },
});

export default uploadsSlice.reducer;

export const updateFiles = uploadsSlice.actions;
