import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import {
  currentUser,
  editUser,
  login,
  logOut,
  register,
  refreshUser,
  sendResetEmail,
  resetPwd,
} from "./operations";

const INITIAL_STATE = {
  user: {
    _id: null,
    name: null,
    email: null,
    weight: null,
    activityLevel: null,
    gender: "female",
    dailyRequirement: 1800,
    photo: null,
  },
  error: null,
  accessToken: null,
  isLoading: false,
  isLoggedIn: false,
};

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    style: {
      background: "var(--accent)",
      color: "var(--main-white)",
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    style: {
      background: "var(--error)",
      color: "var(--main-white)",
    },
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.data.user;
        showSuccessToast("User successfully registered!");
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        showErrorToast(`Sorry, ${payload}`);
      })

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.data.user;
        state.accessToken = payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        showErrorToast(`Sorry, ${payload}`);
      })
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, () => {
        showSuccessToast("User successfully logged out!");
        return INITIAL_STATE;
      })
      .addCase(logOut.rejected, () => {
        showSuccessToast("User successfully logged out!");
        return INITIAL_STATE;
      })
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.accessToken = payload.data.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.accessToken = null;
        state.isLoading = false;
        state.error = payload;
        showErrorToast(`Sorry, ${payload}`);
      })
      .addCase(currentUser.pending, handlePending)
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = payload.data;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        showErrorToast(`Sorry, ${payload}`);
      })
      .addCase(editUser.pending, handlePending)
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.data;
      })
      .addCase(editUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        showErrorToast(`Sorry, ${payload}`);
      })
      .addCase(sendResetEmail.pending, handlePending)
      .addCase(sendResetEmail.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        showSuccessToast(payload.message); //payload.message - те повідомлення, яке повертає сервер в разі успішн запиту
      })
      .addCase(sendResetEmail.rejected, (state, { payload }) => {
        state.isLoading = false;
        showErrorToast(`Sorry, ${payload}`);
      })
      .addCase(resetPwd.pending, handlePending)
      .addCase(resetPwd.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        showSuccessToast(payload.message);
        //На стр /reset-pwd  має бути dispatch(sendResetEmail({token, password})).unwrap().then(()=> navigate('/signIn', {replace: true}))
      })
      .addCase(resetPwd.rejected, (state, { payload }) => {
        state.isLoading = false;
        showErrorToast(`Sorry, ${payload}`);
      });
  },
});

export const authReducer = authSlice.reducer;
