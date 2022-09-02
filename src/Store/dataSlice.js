const { createSlice } = require("@reduxjs/toolkit");

export const POS_CONTROLLER_INITIAL_STATE = {
  NAV_HIDE: "NAV_HIDE",
  LOGIN: "LOGIN",
};

const POS_CONTROLLER = createSlice({
  name: "POS",
  initialState: {
    NAV_HIDE: false,
    LOGIN: false,
  },
  reducers: {
    setnNavHide(state, action) {
      state.NAV_HIDE = action.payload.NAV_HIDE;
    },
    setLogin(state, action) {
      state.LOGIN = action.payload.LOGIN;
    },
  },
});

// login
// navigaion
export const { setnNavHide, setLogin } = POS_CONTROLLER.actions;
export const POST_NAVHIDE_SHOW = POS_CONTROLLER.reducer;
