import {
  SET_USER_DATA,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  AUTH_USER_REMEMBER_MY,
  AUTH_OUT_USER_REMEMBER_MY,
  SET_MESSAGE
} from "../types";

let initialState = {
  usersId: null,
  login: null,
  pass: null,
  rememberMe: false,
  loginIn: true,
  btnDisplayNone: false, //
  message: '', //сообщение
  messageStyle: {}, //рендерим стили к сообщению
  didInvalidate: false, //показываем лоудер
  fetchedPageCount: 1, //станица запоса
  isFetching: false, //запоса позитивный или негативный
}


const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return Object.assign({}, state, {
        isFetching: false,  //пишол позитивный ответ от сервера 
        didInvalidate: false, // скрываем лоудер
        ...action.data
      });
    case SET_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
        messageStyle: action.style,
      });
    case AUTH_USER_REMEMBER_MY:
      return Object.assign({}, state, {
        rememberMe: true  //если пользователь хочет авторизоваться
      })
    case AUTH_OUT_USER_REMEMBER_MY:
      return Object.assign({}, state, {
        rememberMe: false  //если пользователь не хочет авторизоваться (или уже есть акаунт )
      });
    case FETCH_POSTS_FAILURE:
      return Object.assign({}, state, {
        didInvalidate: true  //запрос прошол показываем лоудер
      })
    case FETCH_POSTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,   //пришол негативный ответ от севера
        didInvalidate: false //лоуде скрываем
      });
    default:
      return state;
  }
}
//window.store.getState().login

export default headReducer;