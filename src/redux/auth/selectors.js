export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.accessToken;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthError = (state) => state.auth.error;
