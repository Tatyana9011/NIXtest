import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../comon/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import s from "./Login.module.css";
import { Col, Container, Form, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const login15 = maxLengthCreator(15);

const email100 = maxLengthCreator(100);

const LoginForm = ({ handleSubmit,
  message,style, rememberMe,
  loginIn, authUserRememberMy,
  authSetLoginInOut,
  removeUserData, setFilterGoodsData }) => {

  return (
    <Container>
      <Col className='col-lg-4 col-10 offset-lg-3 mt-4 mb-4'>
        <Form.Group className="mb-3" controlId="Mass">
           <Form.Label style={style}>{message}</Form.Label>
        </Form.Group>
        {loginIn ? <>
          <p  className={s.tweetFormSubtitle}>Вы авторизиованны, если хотите выйти<Nav.Link onClick={()=>removeUserData()}className={`${s.NavLink} nav-link`}>Exit</Nav.Link>
          </p>
          <p  className={s.tweetFormSubtitle}>Вернутся на главную<NavLink to="/home" onClick={()=>setFilterGoodsData('label', "New")} className={`${s.NavLink} nav-link`}>Home</NavLink>
          </p>
          <p className={s.tweetFormSubtitle}> Для удаления с базы <Nav.Link onClick={() => authSetLoginInOut()} className={`${s.Delete} nav-link`}>Delete</Nav.Link>
          </p>
        </> :
          <>{!rememberMe ?
              <>
                <h2 className={s.tweetFormTitle}>Введите логин и пароль</h2>
                <p  className={s.tweetFormSubtitle}>Если у вас нет логина, пройдите <Nav.Link className={`${s.button} nav-link`} onClick={()=>authUserRememberMy()}>регистрацию</Nav.Link>
                </p>
              </> :
              <>
                <h2 className={s.tweetFormTitle}>Регистрация</h2>
              </>
            }
            <Form onSubmit={handleSubmit}>
              {rememberMe ?
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Email address</Form.Label>
                  <Field placeholder={"Enter email"}
                    name={'email'} component={Input}
                    validate={[required, email100]} />
                </Form.Group> : ''
              }
              <Form.Group className="mb-3" controlId="Login">
                <Form.Label>Login</Form.Label>
                <Field placeholder={"Enter login"}
                  name={'login'} component={Input}
                  validate={[required, login15]} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Field placeholder={"Password"}
                  name={'pass'} component={Input}
                  validate={[required, login15]} />
              </Form.Group>
              {rememberMe ?
                <Form.Group className="mb-3" controlId="Password2">
                  <Form.Label>Password raped</Form.Label>
                  <Field placeholder={"Password raped"}
                    name={'pass2'} component={Input}
                    validate={[required, login15]} />
                </Form.Group> : ''
              }
              <button type="submit" className={s.NavLink}>{!rememberMe?`Log in`:'Authorization'}</button>
            </Form>
        </>
        }
      </Col>
    </Container>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginReduxForm;
