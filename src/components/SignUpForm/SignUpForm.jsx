import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import css from "./SignUpForm.module.css";
import sprite from "../../img/icons.svg";
import { useDispatch } from "react-redux";
import { register, login } from "../../redux/auth/operations";
import { ErrorMessage, Form, Field, Formik } from "formik";
import Logo from "../Logo/Logo";

const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Must contain at least 6 characters")
    .required("Password is required!"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
      };

      await dispatch(register(userInfo)).unwrap();
      await dispatch(login(userInfo)).unwrap();

      actions.resetForm();
    } catch (err) {
      if (err.response?.status === 409) {
        actions.setFieldError("email", "Email already in use");
      } else {
        actions.setFieldError("general", "Something went wrong. Try again.");
      }
    }
  };

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleRepeatPassword, setVisibleRepeatPassword] = useState(false);

  return (
    <div className={css.wrapper}>
      <Logo />
      <div className={css.formWrapper}>
        <h2 className={css.title}>Sign Up</h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form noValidate autoComplete="off" className={css.form}>
              <div>
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
                  name="email"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
              <div className={css.inputWrapper}>
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
                    width={22}
                    height={22}
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
              <div className={css.inputWrapper}>
                <label htmlFor="repeatPassword" className={css.label}>
                  Repeat password
                </label>
                <div className={css.iconWrapper}>
                  <Field
                    type={visibleRepeatPassword ? "text" : "password"}
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repeat password"
                    className={css.input}
                  />
                  <svg
                    className={css.icon}
                    width={22}
                    height={22}
                    onClick={() =>
                      setVisibleRepeatPassword(!visibleRepeatPassword)
                    }
                  >
                    <use
                      href={`${sprite}#${
                        visibleRepeatPassword ? "icon-eye" : "icon-eye-off"
                      }`}
                    />
                  </svg>
                </div>
                {values.password !== values.repeatPassword && (
                  <ErrorMessage
                    name="repeatPassword"
                    component="div"
                    className={css.errorMessage}
                  />
                )}
              </div>

              <div className={css.buttonWrapper}>
                <button type="submit" className={css.btn}>
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className={css.textSignUp}>
          <p>Already have account</p>
          <NavLink className={css.navLink} to="/signin">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
