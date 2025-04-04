import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchSliceProps {
  query: string;
}

const initialState: SearchSliceProps = {
  query: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
