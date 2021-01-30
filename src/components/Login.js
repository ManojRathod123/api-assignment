import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Field } from "react-final-form";

const onSubmit = (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

const Login = () => (
  <Form
    onSubmit={onSubmit}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
      <div className="main-div">
        <div className="auth-inner">
          <h2> Login Form </h2>
          <Field name="email">
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Email</label>
                  <input {...input} type="text" placeholder="email" className="form-control"/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div className="form-group">
                  <label>Password</label>
                  <input {...input} type="password" placeholder="password" className="form-control"/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <Button as="input" type="submit" value="Submit" />{" "}
            </div>
        </div>
      </div>
      </form>
    )}
  />
);
export default Login;
