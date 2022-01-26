import {
  SET_USER_DATA,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  AUTH_USER_REMEMBER_MY,
  AUTH_OUT_USER_REMEMBER_MY,
  SET_MESSAGE,
  SET_IS_FETCHING,
  SET_LOGIN_IN_OUT,
  SET_BTN_TOGL_HEDER_LOGIN
} from "../types";

let initialState = {
  usersId: null,
  login: null,
  pass: null,
  email: null,
  rememberMe: false, //если пользователь не хочет авторизоваться (или уже есть акаунт )
  loginIn: false, //для повеки залогинен юзер или нет
  loginInOut: false, //для состояния что юзер хочет отпавить свои данные в формме
  btnDisplayNone: false, //скываем кнопкок в шапке зависит на какой станице находимся
  message: '', //сообщение об успехе или об ошибке
  messageStyle: { color: 'blue' }, //рендерим стили к сообщению
  didInvalidate: false, //показываем лоудер
  isFetching: false, //юзер нажал на кнопку авторизации или отправки логина
  formData: null,
}

const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, { //дата получена
        didInvalidate: false, // скрываем лоудер
        ...action.data
      });
    case SET_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
        messageStyle: action.style,
      });
    case SET_BTN_TOGL_HEDER_LOGIN:
      return Object.assign({}, state, {
        btnDisplayNone: action.btnDisplayNone,
      });
    case SET_LOGIN_IN_OUT:
      return Object.assign({}, state, {
        loginInOut: false,
      });
    case SET_IS_FETCHING:
      return Object.assign({}, state, {
        isFetching: true,
        formData: action.formData
      });
    case AUTH_USER_REMEMBER_MY:
      return Object.assign({}, state, {
        rememberMe: true  //если пользователь хочет авторизоваться
      })
    case AUTH_OUT_USER_REMEMBER_MY:
      return Object.assign({}, state, {
        rememberMe: false  //пользователь хочет акаунт (или уже есть акаунт )
      });
    case FETCH_POSTS_FAILURE:
      return Object.assign({}, state, {
        didInvalidate: false, //лоуде скрываем
        message: action.error,  //записываем ошибку
        messageStyle: { color: 'red' }//добавляем стили сообщению
      })
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        didInvalidate: false,  //запрос прошол показываем лоудер
        isFetching: false,
      });
    default:
      return state;
  }
}

export default headReducer;