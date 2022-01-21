import {
  DECREMENT_COUNT,
  SHOW_MODAL_CART,
  HIDE_MODAL_CART,
  DELETE_GOOD_CART,
  SET_GOODS_DATA,
  SET_USER_DATA,
  ADD_GOOD_CART,
  CLEAR_ALL_GOODS_CART,
  SHOW_BUTTON_TOP,
  HIDE_BUTTON_TOP,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  AUTH_USER_REMEMBER_MY,
  AUTH_OUT_USER_REMEMBER_MY,
  SET_MESSAGE
} from './types';

export const decrementGoodCart = (id) => ({ type: DECREMENT_COUNT, id });

export const showModal = () => ({ type: SHOW_MODAL_CART });

export const authUserRememberMy = () => ({ type: AUTH_USER_REMEMBER_MY });

export const authOutUserRememberMy = () => ({ type: AUTH_OUT_USER_REMEMBER_MY });

export const hideModal = () => ({ type: HIDE_MODAL_CART });

export const showBtn = () => ({ type: SHOW_BUTTON_TOP });

export const hideBtn = () => ({ type: HIDE_BUTTON_TOP });

export const deleteGoodCart = (id) => ({ type: DELETE_GOOD_CART, id });

export const addGoodCart = (id) => ({ type: ADD_GOOD_CART, id });

export const setDataGoods = (data) => ({ type: SET_GOODS_DATA, data });

export const clearAllGoodsCart = () => ({ type: CLEAR_ALL_GOODS_CART });

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });
export const fetchPostsFailure = (error) => ({ type: FETCH_POSTS_FAILURE, error: `Oops ${error}` });
export const setMessage = (message, style) => ({ type: SET_MESSAGE, message, style });

export const setAuthUserData = (usersId, login, pass, loginIn) => ({ type: SET_USER_DATA, data: { usersId, login, pass, loginIn } });