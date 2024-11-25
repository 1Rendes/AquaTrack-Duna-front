import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import css from "./SignUpForm.module.css";
import sprite from "../../sprite2.svg";
import { useDispatch } from "react-redux";
import { register, login } from "../../redux/auth/operations";
import { ErrorMessage, Form, Field, Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!")
    .matches(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Please enter valid email"
    ),
  password: Yup.string()
    .min(6, "Must contain at least 6 characters")
    .required("Password is required!"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (values, actions) => {
    try {
      const userInfo = {
        email: values.email,
        password: values.password,
      };

      const registration = await dispatch(register(userInfo));
      if (register.fulfilled.match(registration)) {
        const { email, password } = userInfo;

        const loginResult = await dispatch(login({ email, password }));
        if (login.fulfilled.match(loginResult)) {
          navigate("/tracker");
          actions.resetForm();
        } else {
          setError("Login failed");
        }
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      const status = err.response?.data?.message;

      if (status === "409 Conflict") {
        setEmailError("Email already in use");
      } else {
        const errorMessage = err.response?.data?.message || err.message;
        setError(errorMessage);
      }
    }
  };

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleRepeatPassword, setVisibleRepeatPassword] = useState(false);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Sign Up</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, errors }) => (
          <Form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className={css.form}
          >
            <div className={css.inputWrapper}>
              <label htmlFor="email" className={css.label}>
                Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={`${css.input} ${errors.email ? css.error : ""}`}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="div"
              />
              {emailError && (
                <div className={css.errorMessage}>{emailError}</div>
              )}
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
                  className={`${css.input} ${errors.password ? css.error : ""}`}
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
              {errors.password && (
                <div className={css.errorMessage}>
                  {errors.password.message}
                </div>
              )}
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
                  className={`${css.input} ${
                    errors.repeatPassword ? css.error : ""
                  }`}
                />
                <svg
                  className={css.icon}
                  width={20}
                  height={20}
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
              {error.repeatPassword && (
                <div className={css.errorMessage}>
                  {errors.repeatPassword.message}
                </div>
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

      <p className={css.textSignUp}>
        Already have account
        <NavLink className={css.navLink} to="/signin">
          Sign In
        </NavLink>
      </p>
    </div>
  );
};

export default SignUpForm;
