import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Locale } from '../../types/Locale';

type LocaleState = {
  lang: Locale;
};

const initialState: LocaleState = {
  lang: 'en',
};

const LocaleSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Locale>) => {
      state.lang = action.payload;
    },
  },
});

export default LocaleSlice.reducer;
export const { set } = LocaleSlice.actions;
