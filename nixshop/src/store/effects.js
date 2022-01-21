import { authAPI, goodsAPI } from '../api/api.jsx';
import { setAuthUserData, setDataGoods, authOutUserRememberMy } from "./actions";
import { saveDataJSON, removeDataStorage } from '../components/Functions/secondaryFunction';

export const loginThunkCreator = (pass, login) => async (dispatch) => {
  let response = await authAPI.login(pass, login);
  if (response.statusText === 'OK') {
    saveDataJSON('pass', response.data[0].pass);
    saveDataJSON('login', response.data[0].login);
    dispatch(setAuthUserData(response.data[0].id, response.data[0].login, response.data[0].pass, true));
  }
}

export const authorizationThunkCreator = (email, pass, login) => async (dispatch) => {
  let response = await authAPI.authorization(email, pass, login);
  if (response.statusText === 'Created') {
    dispatch(authOutUserRememberMy());
    dispatch(loginThunkCreator(response.data.pass, response.data.login));
  }
}

export const loginOutThunkCreator = (id) => async (dispatch) => {
  let response = await authAPI.loginOut(id);
  if (response.statusText === 'OK') {
    removeDataStorage('login');
    removeDataStorage('name');
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export const getGoodsThunkCreator = (pageSize, currentPage) => (dispatch) => {
  console.log('pageSize, currentPage: ', pageSize, currentPage);
  goodsAPI(pageSize, currentPage)
    .then((data) => {
      dispatch(setDataGoods(data));
    });
}

