
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uploadsSlice from './features/uploadsSlice';
import userSlice from './features/userSlice';

const rootReducer = combineReducers( {
    uploadsSlice,
    userSlice,
});


export const store = configureStore( {
    reducer: rootReducer,
} );
