import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ForgotPassword.module.css';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import sprite from '../../img/icons.svg';
import Logo from '../Logo/Logo';
import { useDispatch } from 'react-redux';
import { sendResetEmail } from '../../redux/auth/operations';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const emailFieldId = 'userEmail';
  const handleSubmit = (values, actions) => {
    dispatch(sendResetEmail(values));
    actions.resetForm();
  };
  return (
    <div className={css.forgotWrapper}>
      <div className={css.logoWrapper}>
        <Link to="/signin">
          <Logo onPage="forgot" />
        </Link>
      </div>
      <div className={css.forgotTextWrapper}>
        <Link className={css.goBackLink} to="/signin">
          <span className={css.forgotIconWrapper}>
            <svg>
              <use href={`${sprite}#icon-vector-down`}></use>
            </svg>
          </span>
          Go back
        </Link>
        <h1 className={css.forgotTitle}>Reset password</h1>
        <p className={css.forgotDesc}>
          We&apos;ll email you instructions on how to reset your password.
        </p>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className={css.forgotForm}>
              <label className={css.forgotLabel} htmlFor={emailFieldId}>
                <span className={css.forgotLabelText}>Email</span>
                <Field name="email">
                  {({ field, meta }) => (
                    <input
                      {...field}
                      type="text"
                      id={emailFieldId}
                      placeholder="Enter your email"
                      className={clsx(css.forgotInputEmail, {
                        [css.forgotInputError]: meta.touched && meta.error,
                      })}
                    />
                  )}
                </Field>
                <ErrorMessage
                  className={css.forgotErrorMessage}
                  name="email"
                  component="div"
                />
              </label>

              <button
                className={css.forgotSendBtn}
                type="submit"
                disabled={!isValid || !dirty}
              >
                Send password reset link
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
