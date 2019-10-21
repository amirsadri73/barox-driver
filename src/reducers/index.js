export default (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return [
        ...state,
        {
          Name: action.Name,
        }
      ]
      case 'SET_FAMILY':
        return [
          ...state,
          {
            Family: action.Family,
          }
        ]
      case 'SET_EMAIL':
        return [
          ...state,
          {
            Email: action.Email,
          }
        ]
      case 'SET_MOBILE':
        return [
          ...state,
          {
            Mobile: action.Mobile
          }
        ]
      case 'SET_PASSWORD':
        return [
          ...state,
          {
            Password: action.Password
          }
        ]
      
    default:
      return state;
  }
};
