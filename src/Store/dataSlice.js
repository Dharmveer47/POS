const { createSlice } = require("@reduxjs/toolkit");

export const POS_CONTROLLER_INITIAL_STATE = {
  NAV_HIDE: "NAV_HIDE",
  LOGIN: "LOGIN",
  POS_PRODUCTS: "POS_PRODUCTS",
};

const POS_CONTROLLER = createSlice({
  name: "POS",
  initialState: {
    NAV_HIDE: false,
    LOGIN: false,
    POS_PRODUCTS: [],
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
  },
});

export const { setnNavHide, setLogin, setPosProduct } = POS_CONTROLLER.actions;
export const POST_NAVHIDE_SHOW = POS_CONTROLLER.reducer;
