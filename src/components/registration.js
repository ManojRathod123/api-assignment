import React from "react";
import { Form, Field } from "react-final-form";


const onSubmit = (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

const Registration = () => (
  <Form
    onSubmit={onSubmit}
    // form || record level validation
    validate={(values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
}}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <div>
        <div className="main-div">
          <h2 className="title"> Registration From </h2>
          <div className="sub-div">
            <form onSubmit={handleSubmit}>
              <Field className="field" name="name">
                {({ input, meta }) => (
                  <div>
                    <label>Name:-</label>
                    <input {...input} type="text" placeholder="name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <label className="label">Email:-</label>
                    <input {...input} type="text" placeholder="email" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label className="label">Password:-</label>
                    <input {...input} type="password" placeholder="password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div>
                <button type="submit" disabled={submitting} className="btn">
                  Submit
                </button>
                <button type="button" onClick={form.reset} disabled={submitting || pristine} className="btn1">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )}
  />
);
 
export default Registration;
