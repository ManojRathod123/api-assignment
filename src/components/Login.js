import React from "react";
import { Form, Field } from "react-final-form";

const onSubmit = (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

//const required = (value) => (value ? undefined : "Required");

// const email =
// const password =

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
          <h2 className="title"> Login Form </h2>
          <div className="sub-div">
            <Field name="email">  
              {({ input, meta }) => (
                <div>
                  <label className="label">Email</label>
                  <input {...input} type="text" placeholder="email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label className="label">Password</label>
                  <input {...input} type="password" placeholder="password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting} className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    )}
  />
);
export default Login;
