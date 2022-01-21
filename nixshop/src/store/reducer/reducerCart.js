import {
  SHOW_MODAL_CART,
  HIDE_MODAL_CART,
  SHOW_BUTTON_TOP,
  HIDE_BUTTON_TOP
} from '../types';


let initialState = {
  show: false,
  goodsCart: [],
  btnTopShow: false
}

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_CART:
      return { ...state, show: true };
    case SHOW_BUTTON_TOP:
      return { ...state, btnTopShow: true };
    case HIDE_MODAL_CART:
      return { ...state, show: false };
    case HIDE_BUTTON_TOP:
      return { ...state, btnTopShow: false };
    default:
      return state;
  }
};

export default reducerCart;




