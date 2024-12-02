import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ResetPassword.module.css';
import Logo from '../Logo/Logo';
import clsx from 'clsx';
import sprite from '../../img/icons.svg';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPwd } from '../../redux/auth/operations';

const initialValues = {
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Must contain at least 5 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromUrl = searchParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      //code must be later...
    }
  }, [searchParams]);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const pwdFieldId = 'resetPassword';
  const confirmPwdFieldId = 'resetConfirmPwd';

  const handleSubmit = async (values, actions) => {
    const { password } = values;
    await dispatch(resetPwd({ token, password })).unwrap();
    navigate('/signIn', { replace: true });
    actions.resetForm();
  };
  return (
    <div className={css.resetWrapper}>
      <div className={css.logoWrapper}>
        <Link to="/signin">
          <Logo onPage="forgot" />
        </Link>
      </div>
      <h1 className={css.resetTitle}>Reset Password</h1>
      <p className={css.resetDesc}>Write your new password</p>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form noValidate autoComplete="off" className={css.resetForm}>
            <label htmlFor={pwdFieldId} className={css.resetLabel}>
              <span className={css.resetLabelText}>Password</span>
              <Field name="password">
                {({ field, meta }) => (
                  <input
                    {...field}
                    type={visiblePassword ? 'text' : 'password'}
                    id={pwdFieldId}
                    placeholder="Enter your password"
                    className={clsx(css.resetInput, {
                      [css.resetInputError]: meta.touched && meta.error,
                    })}
                  />
                )}
              </Field>
              <svg
                className={css.resetIcon}
                width={22}
                height={22}
                onClick={() => setVisiblePassword(!visiblePassword)}
              >
                <use
                  href={`${sprite}#${
                    visiblePassword ? 'icon-eye' : 'icon-eye-off'
                  }`}
                />
              </svg>
              <ErrorMessage
                name="password"
                component="div"
                className={css.resetErrorMessage}
              />
            </label>
            <label htmlFor={confirmPwdFieldId} className={css.resetLabel}>
              <span className={css.resetLabelText}>Confirm password</span>
              <Field name="confirmPassword">
                {({ field, meta, form }) => (
                  <input
                    {...field}
                    type={visibleConfirmPassword ? 'text' : 'password'}
                    id={confirmPwdFieldId}
                    onPaste={e => {
                      e.preventDefault();
                      form.setFieldError(
                        'confirmPassword',
                        'Copy-pasting password is not allowed!'
                      );
                    }}
                    placeholder="Confirm password"
                    className={clsx(css.resetInput, {
                      [css.resetInputError]: meta.touched && meta.error,
                    })}
                  />
                )}
              </Field>
              <svg
                className={css.resetIcon}
                width={22}
                height={22}
                onClick={() =>
                  setVisibleConfirmPassword(!visibleConfirmPassword)
                }
              >
                <use
                  href={`${sprite}#${
                    visibleConfirmPassword ? 'icon-eye' : 'icon-eye-off'
                  }`}
                />
              </svg>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={css.resetErrorMessage}
              />
            </label>

            <button
              type="submit"
              className={clsx(css.resetSendBtn, {
                [css.btnDisabled]: !isValid || !dirty,
              })}
              disabled={!isValid || !dirty}
            >
              Reset password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
