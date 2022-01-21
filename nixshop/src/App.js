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
  getGoodsThunkCreator,
  authorizationThunkCreator,
  loginOutThunkCreator,
  loginThunkCreator
} from './store/effects';
import { showBtn, hideBtn, hideModal, setAuthUserData } from './store/actions';
import { withSuspense } from './hoc/withSuspense';
import CartContainer from './components/Cart/CartContainer';
import TopButton from './components/TopButton/TopButton';
import { getDataStorage } from './components/Functions/secondaryFunction';

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

  componentDidMount() {
    const pass = getDataStorage('pass');
    const login = getDataStorage('login');
    this.props.getGoodsThunkCreator();
    if (pass && login) {
      this.props.loginThunkCreator(pass, login);
    } else {
      this.props.setAuthUserData(null, null, null, false);
    }
    //this.props.authorizationThunkCreator('email1', 'pass1', 'login1');
    //this.props.loginOutThunkCreator('eKyNTlD');

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

    return (
      <BrowserRouter>
        <HeadContainer />
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/home'} />} />
          <Route path='/home' render={() => < Homepage />} />
          <Route path='/login' render={() => <Login />} />
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
  logonIn: state.isAuth.logonIn,
  goods: state.goods.goods
})

let mapDispatchToProps = (dispatch) => {
  return {
    showBtn: () => dispatch(showBtn()),
    hideBtn: () => dispatch(hideBtn()),
    hideModal: () => dispatch(hideModal()),
    setAuthUserData: (usersId, login, pass, logonIn) => dispatch(setAuthUserData(usersId, login, pass, logonIn)),
    getGoodsThunkCreator: () => dispatch(getGoodsThunkCreator()),
    authorizationThunkCreator: (email, pass, login) => dispatch(authorizationThunkCreator(email, pass, login)),
    loginOutThunkCreator: (id) => dispatch(loginOutThunkCreator(id)),
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
