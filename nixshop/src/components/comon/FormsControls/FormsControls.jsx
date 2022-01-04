import s from './FormsControls.module.css';
import {Form} from 'react-bootstrap';
export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : " ")}>
      <textarea {...input} {...props}/>
      {hasError && <span>{ meta.error}</span> }
    </div>
  )
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : " ")}>
      <Form.Control {...input} {...props}/>
      {hasError && <span>{ meta.error}</span> }
    </div>
  )
}
export const Check = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : " ")}>
      <Form.Check {...input} {...props}/>
      {hasError && <span>{ meta.error}</span> }
    </div>
  )
}