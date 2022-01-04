import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import HeadContainer from "./components/Head/HeadContainer";
import { compose } from 'redux';
import Homepage from './components/Homepage/Homepage';
import { Provider, connect } from 'react-redux';
import GoodsPage from "./components/GoodsPage/GoodsPage";
import Login from "./components/Loginpage/Login/Login";
import store from "./store/reduxStore";

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("some error occured")
    console.log(reason, promise);
    //нужна санка и в апп-редьюсер добавить глобальную ошибку и диспачить санку
  }
  componentDidMount() {
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  /*  делаем отписку от прослушивания псле того как компонента умерла */
  componentWillUnmount() {
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  render() {
    return (
      <BrowserRouter>
        <HeadContainer />
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/home'} />} />
          <Route path='/home' render={() => < Homepage />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/goods' render={() => <GoodsPage />} />
          <Route path='/*' render={() => <div> 404 NOT FOUND</div>} />
        </Switch>
        <Footer />
      </BrowserRouter >
    )
  }
};


const mapStateToProps = (state) => ({
  isAuth: state.login.isAuth
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { store })
)(App);

const NixShop = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default NixShop;
