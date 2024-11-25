import { useId, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import css from "./SignInForm.module.css";
import sprite from "../../sprite.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const SignInForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Please enter valid email"
      ),
    password: Yup.string()
      .min(6, "Must contain at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    values: { email: "", password: "" },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    setIsLoading(true);
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        setIsLoading(false);
        toast.success("Successfully signed in"),
          {
            duration: 2500,
          };
        reset();
        navigate("/tracker");
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Failed to login, please try again"),
          {
            duration: 2500,
          };
      });
  };

  return (
    <>
      
      {isLoading && <p>loading...</p>}
      <div className={css.wrapper}>
        
        <h2 className={css.title}>Sign In</h2>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className={css.form}
        >
          <div className={css.field}>
            <label htmlFor={emailId} className={css.label}>
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              id={emailId}
              placeholder="Enter your email"
              className={`${css.input} ${errors.email ? css.error : ""}`}
            />
            {errors.email && (
              <p className={css.errorMessage}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className={css.field}>
            <label htmlFor={passwordId} className={css.label}>
              Password
            </label>
            <div className={css.iconWrapper}>
              <input
                type={visiblePassword ? "text" : "password"}
                {...register("password")}
                id={passwordId}
                placeholder="Enter your password"
                className={`${css.input} ${errors.password ? css.error : ""}`}
              />
              <svg
                className={css.iconEye}
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
            {errors.password && (
              <p className={css.errorMessage}>
                {errors.password.message}
              </p>
            )}
          </div>
          <div className={css.btnWrapper}>
            <button type="submit" className={css.btn}>
              Sign In
            </button>
          </div>
        </form>
        <p className={css.textSignIn}>
          Don’t have an account?
          <NavLink className={css.navLink} to="/signup">
            Sign Up
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default SignInForm;
