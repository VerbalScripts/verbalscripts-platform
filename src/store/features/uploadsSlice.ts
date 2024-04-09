import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  folders: [], // store user directories
  selectedFolderId: null, // follow currently selected folder
  files: Array<string>, // store user directories
};

const uploadsSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    createFolder() {},
    updateFiles ( state, action: PayloadAction<string[]> ) {
      state.files = action.payload
    },
  },
});

export default uploadsSlice.reducer;

export const {updateFiles } = uploadsSlice.actions;
