import { combineReducers, configureStore } from '@reduxjs/toolkit';
import uploadsSlice from './features/uploadsSlice';
// import userSlice from './features/userSlice';
import authSlice from './features/authSlice';

// add store namespaces
const rootReducer = combineReducers({
    uploads: uploadsSlice,
    auth: authSlice
});

export const createStore = () => {
    return configureStore( {
        reducer: rootReducer,
    //     middleware: ( getDefaultMiddlware ) => {
    //         getDefaultMiddlware( { serializableCheck: false} )
    //   }
  });
};


// infer type
export type AppStore = ReturnType<typeof createStore>;
// infer root state
export type RootState = ReturnType<AppStore[ 'getState' ]>;
export type AppDispatch = AppStore['dispatch']