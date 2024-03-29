export const initialState = {
  user: {
    avatarURL: null,
    _id: null,
    name: null,
    email: null,
    token: null,
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    levelActivity: null,
    dailySportTime: null,
    dailyCalories: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
  isResendShown: false,
};
