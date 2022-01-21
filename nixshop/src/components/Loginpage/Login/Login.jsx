import React from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import { loginThunkCreator, authorizationThunkCreator, loginOutThunkCreator } from '../../../store/effects';
import { authUserRememberMy, setAuthUserData } from '../../../store/actions';
import { validateFormData,removeDataStorage } from '../../Functions/secondaryFunction';
import { Redirect } from 'react-router-dom';
const Login = (props) => {

  const handleSubmit = (formData) => {
    if(validateFormData(formData)){
      if (props.rememberMe) {
        return props.authorizationThunkCreator(formData.email, formData.pass, formData.login);
      } else {

        //formData.email, formData.pass, formData.login, formData.pass2
        props.loginThunkCreator(formData.pass, formData.login)
           .then(() => {
             console.log('then: ');
            if (props.isAuth) {
              return <Redirect to={"/home"}/>
            }
          }) 
        
        
      }
    }

  };
  const onClick = () => {
    removeDataStorage('login');
    removeDataStorage('name');
    props.setAuthUserData(null, null, null, false);
  }

  return (
    <div>
      <LoginReduxForm
        onSubmit={handleSubmit}
        rememberMe={props.rememberMe}
        loginIn={props.loginIn}
        message={props.message}
        authUserRememberMy={props.authUserRememberMy}
        usersId={props.usersId}
        loginOutThunkCreator={props.loginOutThunkCreator}
        removeUserData={onClick}
      />
      
    </div>
  )

}

const mapStateToProps = (state) => ({
  loginIn: state.isAuth.loginIn,
  rememberMe: state.isAuth.rememberMe,
  message: state.isAuth.message,
  usersId:state.isAuth.usersId,
})

const mapDispatchToProps = (dispatch) => {
  return {
    loginThunkCreator: (pass, login) => dispatch(loginThunkCreator(pass, login)),
    authorizationThunkCreator: (email, pass, login) => dispatch(authorizationThunkCreator(email, pass, login)),
    authUserRememberMy: () => dispatch(authUserRememberMy()),
    loginOutThunkCreator: (id) => dispatch(loginOutThunkCreator(id)),
    setAuthUserData: (usersId, login, pass, logonIn)=>dispatch(setAuthUserData(usersId, login, pass, logonIn))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
