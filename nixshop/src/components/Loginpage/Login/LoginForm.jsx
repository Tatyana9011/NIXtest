import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input,Check } from '../../comon/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import s from "./Login.module.css";
import { Col, Container,Form } from 'react-bootstrap';


const login15 = maxLengthCreator(15);

const email100 = maxLengthCreator(100);

const LoginForm = ({handleSubmit, error}) => {

  return (
    <Container>
      <Col className='col-lg-4 col-10 offset-lg-3 mt-4 mb-4'>
        <h6>У ВАС ЕЩЕ НЕТ АККАУНТА? </h6>
        <h6>Пройдите простую регистрацию:</h6>
        <Form onSubmit = {handleSubmit}>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Field placeholder={"Enter email"}
              name={'email'} component={Input}
              validate={[required, email100]} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Field placeholder={"Password"}
              name={'pass'} component={Input}
              validate={[required, login15]} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="checkbox">
            <Field name={'rememberMe'} component={Check} label="Check me out"/>
          </Form.Group>
          <button type="submit" className={s.NavLink}>Login</button>
        </Form>
      </Col>
    </Container>
  )

}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


export default LoginReduxForm;
