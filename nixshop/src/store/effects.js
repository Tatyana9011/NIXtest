import { authAPI } from '../api/api.jsx';
import { setAuthUserData } from "./reducer";

export const meThunkCreator = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, email, pass } = response.data.data;
    dispatch(setAuthUserData(id, email, pass));
  }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
  console.log('email: ', email);
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(meThunkCreator());
  }
};

export const loginOutThunkCreator = () => async (dispatch) => {
  let response = await authAPI.loginOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
