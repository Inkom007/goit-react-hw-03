import s from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";

const ContactForm = ({ initialValues, addContact }) => {
  const handleSubmit = (data, actions) => {
    addContact({
      id: Date.now(),
      name: data.name,
      number: data.number,
    });
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span className={s.label}>Name</span>
            <Field className={s.input} name="name"></Field>
          </label>
          <label>
            <span className={s.label}> Number</span>
            <Field className={s.input} name="number"></Field>
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
