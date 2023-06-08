import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValues: { firstName: "", lastName: "", email: "", phone: "" },
  isTouched: { firstName: false, lastName: false, emal: false, phone: false },
};

const formSlice = createSlice({
  name: "formStore",
  initialState,
  reducers: {
    inputValue(state, action) {
      state.inputValues = { ...state.inputValues, ...action.payload };
    },
    inputIsTouched(state, action) {
      state.isTouched = { ...state.isTouched, ...action.payload };
    },
  },
});

const store = configureStore({ reducer: formSlice.reducer });

export const formActions = formSlice.actions;
export default store;
