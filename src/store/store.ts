import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import themeReducer from './features/themeSlice';
=======
import themeReducer from './themeSlice';
>>>>>>> origin/master

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 