export default (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        form: {
          ...state.form,
          Name: action.Name
        }
      };
    case "SET_FAMILY":
      return {
        ...state,
        form: {
          ...state.form,
          Family: action.Family
        }
      };
    case "SET_EMAIL":
      return {
        ...state,
        form: {
          ...state.form,
          Email: action.Email
        }
      };
    case "SET_MOBILE":
      return {
        ...state,
        form: {
          ...state.form,
          Mobile: action.Mobile
        }
      };
    case "SET_PASSWORD":
      return {
        ...state,
        form: {
          ...state.form,
          Password: action.Password
        }
      };

    default:
      return state;
  }
};
