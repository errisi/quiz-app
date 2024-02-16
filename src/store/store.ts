import { configureStore } from '@reduxjs/toolkit';
import QuestionsReducer from '../features/Questions';

const store = configureStore({
  reducer: {
    Questions: QuestionsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
