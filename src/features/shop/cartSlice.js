import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.value.findIndex((item) => item.id === product.id);

      if (index === -1) {
        state.value.push(product);
      } else {
        state.value[index].quantity += 1;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
