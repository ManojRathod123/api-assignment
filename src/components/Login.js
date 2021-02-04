import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Field } from "react-final-form";
import { loginUser } from "../Redux/Login/LoginAxios";
import { useDispatch, useSelector } from "react-redux";
import {Redirect} from 'react-router-dom'

const Login = () => {
  const [state, setData] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    dispatch(loginUser(values));
  };

  // const loginuserReducer = useSelector((state) => state.loginuserReducer);
  // useEffect(() => {
  //   console.log(loginuserReducer);
  // },[])

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={state}
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
                    <label>Password</label>
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
                <Button as="input" type="submit" value="Submit" />{" "}
              </div>
              <div>
                <Link to="/registration">Register</Link>
              </div>
            </div>
          </div>
        </form>
      )}
    />
  );
};
export default Login;
