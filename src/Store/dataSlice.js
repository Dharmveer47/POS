const { createSlice } = require("@reduxjs/toolkit");

export const POS_CONTROLLER_INITIAL_STATE = {
    NAV_HIDE: "NAV_HIDE"
}

const POS_CONTROLLER = createSlice({
  name: "POS",
  initialState: {
    NAV_HIDE: false,
  },
  reducers: {
    setnNavHide(state, action) {
      state.NAV_HIDE = action.payload.NAV_HIDE;
    },
  },
});

export const { setnNavHide } = POS_CONTROLLER.actions;
export const POST_NAVHIDE_SHOW =  POS_CONTROLLER.reducer;