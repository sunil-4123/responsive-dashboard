import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  payoutRate: 10,
};

const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setPayoutRate: (state, action) => {
      state.payoutRate = action.payload;
    },
  },
});

export const { setArticles, setPayoutRate } = slice.actions;
export default slice.reducer;
