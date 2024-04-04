import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  folders: [], // store user directories
  selectedFolderId: null, // follow currently selected folder
  files: [], // store user directories
};

const uploadsSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    createFolder() {},
  },
});

export default uploadsSlice.reducer;
