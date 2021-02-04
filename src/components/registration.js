import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Field } from "react-final-form";
import { postUser } from "../Redux/Registration/RegisterAxios";
import { useDispatch } from "react-redux";

const Registration = () => {
  const [state, setData] = useState({name: "",email: "",password: "",confirm: ""});

  //dispatch called here...
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);

    dispatch(postUser(values));
  };

  return (
    <Form
      // validation...
      onSubmit={onSubmit}
      initialValues={state}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }

        // email validation
        const pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
        if (!values.email) {
          errors.email = "Required";
        } else if (!pattern.test(values.email)) {
          errors.email = "Please enter valid email address.";
        }

        // password validation
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 5  ) {
          errors.password = "must be more than 5 charaters";
        }
        if (!values.confirm) {
          errors.confirm = "Required";
        } else if (values.confirm !== values.password) {
          errors.confirm = "Must match";
        }
        return errors;
      }}

      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        errors,
      }) => (
        <div className="auth-wrapper">
          <div className="main-div">
            <div className="auth-inner">
              <h2> Registration From </h2>
              <div className="sub-div">
                <form onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    type="text"
                    placeholder="name"
                    className="form-control"
                  >
                    {({ input, meta, ...rest }) => (
                      <div className="form-group">
                        <label>Name</label>
                        <input {...input} {...rest} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="email"
                    type="text"
                    placeholder="email"
                    className="form-control"
                  >
                    {({ input, meta, ...rest }) => (
                      <div className="form-group">
                        <label>Email</label>
                        <input {...input} {...rest} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    className="form-control"
                  >
                    {({ input, meta, ...rest }) => (
                      <div className="form-group">
                        <label className="label">Password</label>
                        <input {...input} {...rest} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="confirm"
                    type="password"
                    placeholder="confirm password"
                    className="form-control"
                  >
                    {({ input, meta, ...rest }) => (
                      <div className="form-group">
                        <label className="label">Confirm Password</label>
                        <input {...input} {...rest} />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <div>
                    <Button as="input" type="submit" value="Submit" />{" "}
                    <Button
                      as="input"
                      type="reset"
                      value="Reset"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    />
                  </div>
                  <pre>{JSON.stringify(values, undefined, 3)}</pre>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Registration;
