import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import { loginThunkCreator} from './../../../store/effects';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

  const onSubmit = (formData) => {
    props.loginThunkCreator(formData.email,formData.password,formData.rememberMe,formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={"/home"} />
  }
  return (<div>
    <LoginReduxForm  onSubmit={onSubmit}/>
  </div>)

}

const mapStateToProps = (state) => ({
  isAuth: state.login.isAuth,
})

export default connect(mapStateToProps,{loginThunkCreator})(Login)
