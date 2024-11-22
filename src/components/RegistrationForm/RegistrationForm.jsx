import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import css from "../ContackForm/ContactForm.module.css";

const RegistrationForm = () => {
  const initialValues = { name: "", email: "", password: "" };
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values));
    console.log(values);
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.container}>
        <label htmlFor="nameId" className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={nameId}
          className={css.field}
        ></Field>
        <label htmlFor="emailId" className={css.label}>
          Email
        </label>
        <Field
          type="email"
          name="email"
          id={emailId}
          className={css.field}
        ></Field>
        <label htmlFor="passwordId" className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id={passwordId}
          className={css.field}
        ></Field>
        <button type="submit" className={css.button}>
          Sign up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
