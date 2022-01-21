import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerIsAuth from './reducerIsAuth';
import reducerGoods from './reducerGoods';
import reducerCart from "./reducerCart";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  isAuth: reducerIsAuth,
  goods: reducerGoods,
  cart: reducerCart,
  form: formReducer,
});

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)

let store = createStore(reducers, composedEnhancer);

window.store = store;
export default store;