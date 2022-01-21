import {
  SET_GOODS_DATA,
  DELETE_GOOD_CART,
  ADD_GOOD_CART,
  CLEAR_ALL_GOODS_CART,
  DECREMENT_COUNT,
} from '../types';

let initialState = {
  goods: [],
  goodsNew: [],
  Bestseller: [],
  Clothing: [],
  Shoes: [],
  Accessories: [],
  Womens: [],
  Mens: [],
  dataCartGoods: []
}

const reducerGoods = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS_DATA:
      return Object.assign({}, state,
        {
          goods: action.data,
          goodsNew: action.data.filter(good => good["label"] === "New"),
          Bestseller: action.data.filter(good => good["label"] === "Bestseller"),
          Clothing: action.data.filter(good => good["category"] === "Clothing"),
          Shoes: action.data.filter(good => good["category"] === "Shoes"),
          Accessories: action.data.filter(good => good["category"] === "Accessories"),
          Womens: action.data.filter(good => good["gender"] === "Womens"),
          Mens: action.data.filter(good => good["gender"] === "Mens"),
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