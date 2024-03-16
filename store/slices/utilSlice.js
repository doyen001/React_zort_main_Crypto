import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  
  const initialState = {
    isOverlay: false,
    isSpinner: false,
    isDrawer: false,
    isLoginWindow: false,
    isSignupWindow: false,
    isForgotWindow: false,
  };
  
  export const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
      
      showSpinner: (state) => {
        state.isOverlay = true;
        state.isSpinner = true;
      },

      hideSpinner: (state) => {
        state.isOverlay = false;
        state.isSpinner = false;
      },

      showOverlay: (state) => {
        state.isOverlay = true;
      },

      hideOverlay: (state) => {
        state.isOverlay = false;
      },

      showDrawer: (state) => {
        state.isDrawer = true;
      },

      hideDrawer: (state) => {
        state.isDrawer = false;
      },

      showLoginWindow: (state) => {
        state.isLoginWindow = true;
      },

      hideLoginWindow: (state) => {
        state.isLoginWindow = false;
      },

      showSignupWindow: (state) => {
        state.isSignupWindow = true;
      },

      hideSignupWindow: (state) => {
        state.isSignupWindow = false;
      },

      showForgotWindow: (state) => {
        state.isForgotWindow = true;
      },

      hideForgotWindow: (state) => {
        state.isForgotWindow = false;
      },
      
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    showSpinner,
    hideSpinner,
    showOverlay,
    hideOverlay,
    showDrawer,
    hideDrawer,
    showLoginWindow,
    hideLoginWindow,
    showSignupWindow,
    hideSignupWindow,
    showForgotWindow,
    hideForgotWindow,
  } = utilSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default utilSlice.reducer;