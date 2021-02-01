import React  from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Field } from "react-final-form";
import axios from "axios";


const onSubmit = (payload) => (dispatch) => {
  dispatch({ type: "REQUEST_STARTED" });
  axios.post(
      "http://localhost:8000/api/users", {
        name: " ",
        email: " ",
        password: " ",
      },
    )
    
    .then((res) => {
      dispatch({
        type: "REQUEST_SUCCEEDED",
        data: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "REQUEST_FAILED",
        error: error,
      });
    });
};

const Registration = () => {

  // const onSubmit = (values) => { // values is paramerter or object
  // window.alert(JSON.stringify(values, 0, 2));

  return (
    <Form
      // validation...
      onSubmit={onSubmit}
      validate={(values) => {
        let errors = {}; 
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
  
        <div className="auth-wrapper">
          <div className="main-div">
            <div className="auth-inner">
              <h2> Registration From </h2>
              <div className="sub-div">
                <form onSubmit={handleSubmit}>
                  <Field className="field" name="name">
                    {({ input, meta }) => (
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="name"
                          className="form-control"
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          {...input}
                          type="text"
                          placeholder="email"
                          className="form-control"
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div className="form-group">
                        <label className="label">Password</label>
                        <input
                          {...input}
                          type="password"
                          placeholder="password"
                          className="form-control"
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <div>
                    <Button as="input" type="submit" value="Submit"/>{" "}
                    <Button
                      as="input"
                      type="reset"
                      value="Reset"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
};

export default Registration; 
