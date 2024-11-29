import { useState } from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import css from "./SignInForm.module.css";
import sprite from "../../img/icons.svg";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import Logo from "../Logo/Logo";
import clsx from "clsx";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Must contain at least 5 characters")
    .required("Password is required"),
});

const SignInForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
      };
      await dispatch(login(userInfo)).unwrap();

      actions.resetForm();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Login failed. Try again.";
      actions.setFieldError(errorMessage);
    }
  };

  return (
    <div className={css.wrapper}>
      <Logo />
      <div className={css.formWrapper}>
        <h2 className={css.title}>Sign In</h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form noValidate autoComplete="off" className={css.form}>
              <div className={css.field}>
                <label htmlFor="email" className={css.label}>
                  Email
                </label>
                <Field name="email">
                  {({ field, meta }) => (
                    <input
                      {...field}
                      type="text"
                      id="email"
                      placeholder="Enter your email"
                      className={clsx(css.input, {
                        [css.inputError]: meta.touched && meta.error,
                      })}
                    />
                  )}
                </Field>
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
                  <Field name="password">
                    {({ field, meta }) => (
                      <div className={css.iconWrapper}>
                        <input
                          {...field}
                          type={visiblePassword ? "text" : "password"}
                          id="password"
                          placeholder="Enter your password"
                          className={clsx(css.input, {
                            [css.inputError]: meta.touched && meta.error,
                          })}
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
                    )}
                  </Field>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
              <div className={css.btnWrapper}>
                <button
                  type="submit"
                  className={clsx(css.btn, {
                    [css.btnDisabled]: !isValid || !dirty,
                  })}
                  disabled={!isValid || !dirty}
                >
                  Sign In
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className={css.textSignIn}>
          <p>Don’t have an account?</p>
          <NavLink className={css.navLink} to="/signup">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
