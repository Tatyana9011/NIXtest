import { applyMiddleware, combineReducers, createStore } from "redux";
import headReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
  login: headReducer,
  form: formReducer,
} )


let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store = store;
export default store;