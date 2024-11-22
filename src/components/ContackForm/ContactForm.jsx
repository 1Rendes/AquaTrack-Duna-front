import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { apiPostContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Invalid phone number format, should be ***-**-**"
    )
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(apiPostContact(values));
    action.resetForm();
  };

  const nameId = useId();
  const telId = useId();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.container}>
        <label htmlFor={nameId} className={css.label}>
          Name
        </label>
        <Field
          className={css.field}
          type="text"
          name="name"
          id={nameId}
        ></Field>
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={telId} className={css.label}>
          Number
        </label>
        <Field
          className={css.field}
          type="tel"
          name="number"
          id={telId}
        ></Field>
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
