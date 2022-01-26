import {
  SET_GOODS_DATA,
  DELETE_GOOD_CART,
  ADD_GOOD_CART,
  CLEAR_ALL_GOODS_CART,
  DECREMENT_COUNT,
  SET_FILTER_GOODS_DATA,
  SET_CURRENT_PAGE,
} from '../types';

let initialState = {
  goods: [],
  currentPage: 1,
  pageSize: 8,
  totalCount: [],
  totalCountFilterData: [],
  filter: "",
  values: "",
  dataCartGoods: []
}

const reducerGoods = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_GOODS_DATA:
      return Object.assign({}, state,
        {
          filter: action.filter,
          values: action.values
        });
    case SET_CURRENT_PAGE:
      return Object.assign({}, state,
        {
          currentPage: action.currentPage,
        });
    case SET_GOODS_DATA:
      return Object.assign({}, state,
        {
          goods: action.data,
          totalCount: action.totalCount
        });
    case DELETE_GOOD_CART:
      return Object.assign({}, state,
        { dataCartGoods: [...state.dataCartGoods.filter(item => item.id !== action.id)] }
      );
    case DECREMENT_COUNT:
      const index = state.dataCartGoods.findIndex(n => n.id === action.id);
      return Object.assign({}, state,
        { dataCartGoods: [...state.dataCartGoods.filter((item, i) => i !== index)] }
      );
    case ADD_GOOD_CART:
      return Object.assign({}, state,
        {
          dataCartGoods: state.dataCartGoods.concat(state.goods.filter(item => item.id === action.id))
        }
      );
    case CLEAR_ALL_GOODS_CART:
      return Object.assign({}, state,
        {
          dataCartGoods: []
        }
      );
    default:
      return state;
  }
}

export default reducerGoods;