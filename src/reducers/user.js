var data = {
  user: "",
  isAuthenticated: false,
  isLoading: false,
  isEditMode: false,
  error: ""
};

export default function userFunctions(state = data, action) {
  switch (action.type) {
    case "USER_INIT":
      return { ...state, isLoading: true };
    case "USER_SUCCESS":
      console.log("success", action);
      return { ...state, isLoading: false, user: action.response };
    case "USER_FAILURE":
      return { ...state };
    case "USER_PROFILE_INFO":
      return { ...state, isAuthenticated: true, user: action.response };
    case "USER_PROFILE_SUCCESS":
      return { ...state, isAuthenticated: false, error: action.response.error };

    default:
      return state;
  }
}