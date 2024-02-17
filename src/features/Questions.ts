/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Question } from '../types/Question';
import { getQuestions } from '../api/questions';

type QuestionsState = {
  questions: Question[];
  loading: boolean;
  error: string;
};

const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: '',
};

export const init = createAsyncThunk('questions/fetch', async () => {
  const result = await getQuestions();

  return result;
});

const QuestionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state, action) => {
      state.loading = false;
      state.error = `There was an error loading, this is what our server says: ${action.payload}`;
    });
  },
});

export default QuestionsSlice.reducer;
export const { set, setLoading, setError } = QuestionsSlice.actions;
