import { authAPI, goodsAPI } from '../api/api.jsx';
import {
  setAuthUserData, setDataGoods,
  authOutUserRememberMy, fetchPostsFailure,
  fetchPostsRequest, setCurrentPage, setMessage
} from "./actions";
import { saveDataJSON, removeDataStorage } from '../components/Functions/secondaryFunction';

export const loginThunkCreator = (pass, login) => async (dispatch) => {
  dispatch(fetchPostsRequest());
  let response = await authAPI.login(pass, login);
  setTimeout(() => {
    if (response.statusText === 'OK') {
      saveDataJSON('pass', response.data[0].pass);
      saveDataJSON('login', response.data[0].login);
      dispatch(setAuthUserData(response.data[0].id, response.data[0].login, response.data[0].pass, true));
    } else {
      dispatch(fetchPostsFailure(response.statusText));
    }
  }, 500);
}

export const userGetThunkCreator = (pass, login) => async (dispatch) => {
  dispatch(fetchPostsRequest());
  let response = await authAPI.login(pass, login);
  if (response.statusText === 'OK') {
    if (response.data[0]) {
      dispatch(setAuthUserData(response.data[0].id, response.data[0].login, response.data[0].pass, false));
      dispatch(setMessage('', { color: '' }));
      setTimeout(() => {
        dispatch(setMessage('Вы успешно авторизиованны', { color: 'green' }));
      }, 1000);
      setTimeout(() => {
        dispatch(setMessage('', { color: '' }));
      }, 4000);
    }
  } else {
    dispatch(fetchPostsFailure(response.statusText));
  }
};

export const authorizationThunkCreator = (email, pass, login) => async (dispatch) => {
  dispatch(fetchPostsRequest());
  let response = await authAPI.authorization(email, pass, login);
  if (response.statusText === 'Created') {
    dispatch(authOutUserRememberMy());
    dispatch(loginThunkCreator(response.data.pass, response.data.login));
  } else {
    dispatch(fetchPostsFailure(response.statusText));
  }
}

export const loginOutThunkCreator = (id) => async (dispatch) => {
  dispatch(fetchPostsRequest());
  let response = await authAPI.loginOut(id);
  if (response.statusText === 'OK') {
    removeDataStorage('login');
    removeDataStorage('pass');
    dispatch(setAuthUserData(null, null, null, false));
  } else {
    dispatch(fetchPostsFailure(response.statusText));
  }
}

export const getGoodsThunkCreator = (pageSize, page) => async (dispatch) => {
  dispatch(setCurrentPage(page));
  dispatch(fetchPostsRequest());
  let response = await goodsAPI.goodsAll(pageSize, page);
  if (response.statusText === 'OK') {
    dispatch(setDataGoods(response.data, response.headers['x-total-count']));
  } else {
    dispatch(fetchPostsFailure(response.statusText));
  }
}

export const getGoodsFilterThunkCreator = (pageSize, page, filter, value) => async (dispatch) => {
  dispatch(setCurrentPage(page));
  dispatch(fetchPostsRequest());
  let response = await goodsAPI.goodsPageFilterAPI(pageSize, page, filter, value);
  if (response.statusText === 'OK') {
    dispatch(setDataGoods(response.data, response.headers['x-total-count']));
  } else {
    dispatch(fetchPostsFailure(response.statusText));
  }
}

/* export const initializeApp = () => {
  return ((dispatch) => {
    let promise = dispatch(meThunkCreator());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
    })
  });
}; */

