import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Answer } from '../../types/Answers';

type AnswersState = {
  answers: Answer[];
  loading: boolean;
  error: string;
};

const initialState: AnswersState = {
  answers: [],
  loading: false,
  error: '',
};

const AnswersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Answer[]>) => {
      state.answers = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default AnswersSlice.reducer;
export const { set, setLoading, setError } = AnswersSlice.actions;
