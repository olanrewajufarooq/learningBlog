import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import type { FormikActions } from '@customtypes/utils';
import { formStyle } from '@styles/pages';

function ContactForm() {

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
  } );
  
  interface ContactFormValues {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = ( values: ContactFormValues, actions: FormikActions ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 400);
  };

  return (
    <div className={formStyle.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={formStyle.group}>
            <label htmlFor="name" className={formStyle.label}>Name</label>
            <Field name="name" placeholder="Your Name" className={formStyle.input} />
            <ErrorMessage name="name" component="div" className={formStyle.error} />
          </div>

          <div className={formStyle.group}>
            <label htmlFor="email" className={ formStyle.label }>Email</label>
            <Field name="email" type="email" placeholder="Your Email" className={formStyle.input} />
            <ErrorMessage name="email" component="div" className={formStyle.error} />
          </div>

          <div className={formStyle.group}>
            <label htmlFor="message" className={ formStyle.label }>Message</label>
            <Field name="message" as="textarea" placeholder="Your Message" className={formStyle.textarea} />
            <ErrorMessage name="message" component="div" className={formStyle.error} />
          </div>

          <div className={formStyle.group}>
            <button type="submit" className={formStyle.button}>Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
