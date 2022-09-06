const { createSlice } = require("@reduxjs/toolkit");

export const POS_CONTROLLER_INITIAL_STATE = {
  NAV_HIDE: "NAV_HIDE",
  LOGIN: "LOGIN",
  POS_PRODUCTS: "POS_PRODUCTS",
  POS_PRODUCTS_INC: "POS_PRODUCTS_INC",
  POS_SELECTED_PRODUCT: "POS_SELECTED_PRODUCT",
};

const POS_CONTROLLER = createSlice({
  name: "POS",
  initialState: {
    NAV_HIDE: false,
    LOGIN: false,
    POS_PRODUCTS: [],
    POS_PRODUCTS_INC: { counter: 1, id: 1 },
    POS_SELECTED_PRODUCT: [],
  },
  reducers: {
    setnNavHide(state, action) {
      state.NAV_HIDE = action.payload.NAV_HIDE;
    },
    setLogin(state, action) {
      state.LOGIN = action.payload.LOGIN;
    },
    setPosProduct(state, action) {
      state.POS_PRODUCTS = action.payload.POS_PRODUCTS;
    },
    setPosProductInc(state, action) {
      state.POS_PRODUCTS_INC = action.payload.POS_PRODUCTS_INC;
    },
    setPosSelectedProduct(state, action) {
      state.POS_SELECTED_PRODUCT = action.payload.POS_SELECTED_PRODUCT;
    },
  },
});

export const {
  setnNavHide,
  setLogin,
  setPosProduct,
  setPosProductInc,
  setPosSelectedProduct,
} = POS_CONTROLLER.actions;
export const POST_NAVHIDE_SHOW = POS_CONTROLLER.reducer;
