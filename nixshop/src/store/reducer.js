const SET_USER_DATA = 'samurai/auth/SET_USER_DATA';

let initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
  btnDisplayNone: false, // если null значет капча не обязательна
}

const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
}

export const setAuthUserData = (usersId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { usersId, email, login, isAuth } });

export default headReducer;