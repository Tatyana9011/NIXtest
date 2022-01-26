import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import HeadContainer from "./components/Head/HeadContainer";
import { compose } from 'redux';
import Homepage from './components/Homepage/Homepage';
import { Provider, connect } from 'react-redux';
import GoodsPage from "./components/GoodsPage/GoodsPage";
import Login from "./components/Loginpage/Login/Login";
import store from "./store/reducer/reduxStore";
import {
  getGoodsFilterThunkCreator,
  authorizationThunkCreator,
  loginThunkCreator
} from './store/effects';
import { showBtn, hideBtn, hideModal, setAuthUserData } from './store/actions';
import { withSuspense } from './hoc/withSuspense';
import CartContainer from './components/Cart/CartContainer';
import TopButton from './components/TopButton/TopButton';
import { getDataStorage } from './components/Functions/secondaryFunction';
import Louder from './components/comon/Louder/Louder';

class App extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (window.pageYOffset >= 300) {
      this.props.showBtn();
    } else {
      this.props.hideBtn();
    }
  }
  escapeHandler(event) {
    if (event.code === 'Escape') {
      this.props.hideModal();
    }
  }

  catchAllUnhandledErrors = (reason, promise) => {
    console.log("catchAllUnhandledErrors ....some error occured");
    //нужна санка и в апп-редьюсер добавить глобальную ошибку и диспачить санку
  }

  componentDidUpdate(prevProps) {
    if (this.props.didInvalidate !== prevProps.didInvalidate) {

    }
  }
  componentDidMount() {
    const pass = getDataStorage('pass');
    const login = getDataStorage('login');
    if (pass && login) {
      this.props.loginThunkCreator(pass, login);
    } else {
      this.props.setAuthUserData(null, null, null, false);
    }

    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    window.addEventListener('keydown', this.escapeHandler.bind(this));
    window.addEventListener('scroll', this.handleScroll);
  }

  /*  делаем отписку от прослушивания псле того как компонента умерла */
  componentWillUnmount() {
    window.removeEventListener('keydown', this.escapeHandler.bind(this));
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (this.props.didInvalidate) {
      return <Louder />
    }
    return (
      <BrowserRouter>
        <HeadContainer />
        {this.props.didInvalidate ? <Louder /> : ''}
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/home'} />} />
          <Route path='/home' render={() => < Homepage />} />
          <Route path='/login' render={withSuspense(Login)} />
          <Route path='/goods/:category?' render={withSuspense(GoodsPage)} />
          <Route path='/*' render={() => <div> 404 NOT FOUND</div>} />
        </Switch>
        <Footer />
        <CartContainer />
        <TopButton />
      </BrowserRouter >
    )
  }
};


const mapStateToProps = (state) => ({
  loginIn: state.isAuth.loginIn,
  goods: state.goods.goods,
  didInvalidate: state.isAuth.didInvalidate,
})

let mapDispatchToProps = (dispatch) => {
  return {
    showBtn: () => dispatch(showBtn()),
    hideBtn: () => dispatch(hideBtn()),
    hideModal: () => dispatch(hideModal()),
    setAuthUserData: (usersId, login, pass, loginIn) => dispatch(setAuthUserData(usersId, login, pass, loginIn)),
    getGoodsFilterThunkCreator: (pageSize, currentPage, filter, value) => dispatch(getGoodsFilterThunkCreator(pageSize, currentPage, filter, value)),
    authorizationThunkCreator: (email, pass, login) => dispatch(authorizationThunkCreator(email, pass, login)),
    loginThunkCreator: (pass, login) => dispatch(loginThunkCreator(pass, login))
  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

const NixShop = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default NixShop;
