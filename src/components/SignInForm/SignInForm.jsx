import { useState } from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import css from "./SignInForm.module.css";
import sprite from "../../img/icons.svg";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Must contain at least 6 characters")
    .required("Password is required"),
});

const SignInForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
      };
  
      await dispatch(login(userInfo)).unwrap(); 
      navigate("/tracker");
      actions.resetForm();
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "Login failed. Try again.";
      actions.setFieldError(errorMessage); 
    }
  };
  
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Sign In</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          className={css.form}
        >
          <div className={css.field}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className={css.input}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="div"
            />
  
          </div>

          <div className={css.field}>
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <div className={css.iconWrapper}>
              <Field
                type={visiblePassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className={css.input}
              />
              <svg
                className={css.icon}
                width={20}
                height={20}
                onClick={() => setVisiblePassword(!visiblePassword)}
              >
                <use
                  href={`${sprite}#${
                    visiblePassword ? "icon-eye" : "icon-eye-off"
                  }`}
                />
              </svg>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className={css.errorMessage}
            />
    
          </div>
          <div className={css.btnWrapper}>
            <button type="submit" className={css.btn}>
              Sign In
            </button>
          </div>
        </Form>
      </Formik>

      <div className={css.textSignIn}>
        <p>Don’t have an account?</p>
        <NavLink className={css.navLink} to="/signup">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default SignInForm;
