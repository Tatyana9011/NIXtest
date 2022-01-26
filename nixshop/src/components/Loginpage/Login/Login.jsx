import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import {
  loginThunkCreator,
  authorizationThunkCreator,
  loginOutThunkCreator,
  userGetThunkCreator
} from '../../../store/effects';
import {
  authUserRememberMy,
  setAuthUserData,setBtnToglHeaderLogin,
  setMessage, setFilterGoodsData,
  authSetIsFetching, authSetLoginInOut
} from '../../../store/actions';
import { validateFormData,removeDataStorage } from '../../Functions/secondaryFunction';

class Login extends React.Component {
  constructor(props) {
    console.log('props: ', props);
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() { 
    this.props.setBtnToglHeaderLogin(true);
  }//пришли на станицу
  componentWillUnmount() { //ушли со страницы
    this.props.setBtnToglHeaderLogin(false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.formData !== prevProps.formData) {
      const { formData } = this.props;
      setTimeout(() => {
        if (this.props.isFetching) {
          if (validateFormData(formData, this.props.setMessage, this.props.login)) {
            if (this.props.rememberMe) {
              this.props.authorizationThunkCreator(formData.email, formData.pass, formData.login);
            } else {
              this.props.loginThunkCreator(formData.pass, formData.login);
            }
          }
        }
      }, 1000);
         
    }
    if (this.props.loginInOut !== prevProps.loginInOut) {
      this.props.loginOutThunkCreator(this.props.usersId);
    }

  }

  handleSubmit(formData) {
    console.log('handleSubmit: ');
    this.props.userGetThunkCreator(formData.pass, formData.login); //есть пользователь или нету
    this.props.authSetIsFetching(formData);
    
  }

  onClick(){
    console.log('onClick: ');
    removeDataStorage('login');
    removeDataStorage('pass');
    this.props.setAuthUserData(null, null, null, false);
  }

  render() {
    return (
      <div>
        <LoginReduxForm
          onSubmit={this.handleSubmit}
          rememberMe={this.props.rememberMe}
          loginIn={this.props.loginIn}
          message={this.props.message}
          style={this.props.style}
          authUserRememberMy={this.props.authUserRememberMy} //кнопка для регистрации
          authSetLoginInOut={this.props.authSetLoginInOut} //меняем значение liginIn :false
          removeUserData={this.onClick}
          setFilterGoodsData={this.props.setFilterGoodsData}
        />
        
      </div>
    )
}
}

const mapStateToProps = (state) => ({
  loginIn: state.isAuth.loginIn,
  rememberMe: state.isAuth.rememberMe,
  message: state.isAuth.message,
  style: state.isAuth.messageStyle,
  usersId: state.isAuth.usersId,
  isFetching: state.isAuth.isFetching,
  formData: state.isAuth.formData,
  loginInOut: state.isAuth.loginInOut,
  login: state.isAuth.login,
})

const mapDispatchToProps = (dispatch) => {
  return {
    loginThunkCreator: (pass, login) => dispatch(loginThunkCreator(pass, login)),
    authorizationThunkCreator: (email, pass, login) => dispatch(authorizationThunkCreator(email, pass, login)),
    authUserRememberMy: () => dispatch(authUserRememberMy()),
    loginOutThunkCreator: (id) => dispatch(loginOutThunkCreator(id)),
    setAuthUserData: (usersId, login, pass, loginIn) => dispatch(setAuthUserData(usersId, login, pass, loginIn)),
    userGetThunkCreator: (pass, login) => dispatch(userGetThunkCreator(pass, login)),
    setMessage: (message, style) => dispatch(setMessage(message, style)),
    setFilterGoodsData: (filter, value) => dispatch(setFilterGoodsData(filter, value)),
    authSetIsFetching: (formData) => dispatch(authSetIsFetching(formData)),
    authSetLoginInOut: () => dispatch(authSetLoginInOut()),
    setBtnToglHeaderLogin:(btn)=>dispatch(setBtnToglHeaderLogin(btn))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
