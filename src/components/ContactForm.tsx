import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import type { FormikActions } from '@customtypes/utils';
import { formStyle } from '@styles/pages';
import supabase from '@utils/supabase';
import { useDialogBox } from '@hooks/useDialogBox';
import DialogBox from './DialogBox';

function ContactForm() {
  const [ isOpen, title, message, messageType, openDialog, closeDialog ] = useDialogBox();

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object( {
    name: Yup.string().required( 'Required' ),
    email: Yup.string().email( 'Invalid email address' ).required( 'Required' ),
    message: Yup.string().required( 'Required' ),
  } );

  interface ContactFormValues {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = async ( values: ContactFormValues, actions: FormikActions ) => {
    const { error } = await supabase.from( 'contact_messages' ).insert( [ values ] );

    if ( error ) {
      console.error( 'Error submitting contact form:', error );
      actions.setSubmitting( false );
      openDialog(
        'Submission Error',
        'There was an error submitting your message. Please try again later.',
        'error'
      );
    } else {
      actions.resetForm();
      actions.setSubmitting( false );
      openDialog(
        'Message Sent',
        'Your message has been sent successfully. We will get back to you soon.',
        'success'
      );
    }
  };

  return (
    <div className={ formStyle.container }>
      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={ handleSubmit }
      >
        { ( { isSubmitting } ) => (
          <Form>
            <div className={ formStyle.group }>
              <label htmlFor="name" className={ formStyle.label }>Name</label>
              <Field name="name" placeholder="Your Name" className={ formStyle.input } />
              <ErrorMessage name="name" component="div" className={ formStyle.error } />
            </div>

            <div className={ formStyle.group }>
              <label htmlFor="email" className={ formStyle.label }>Email</label>
              <Field name="email" type="email" placeholder="Your Email" className={ formStyle.input } />
              <ErrorMessage name="email" component="div" className={ formStyle.error } />
            </div>

            <div className={ formStyle.group }>
              <label htmlFor="message" className={ formStyle.label }>Message</label>
              <Field name="message" as="textarea" placeholder="Your Message" className={ formStyle.textarea } />
              <ErrorMessage name="message" component="div" className={ formStyle.error } />
            </div>

            <div className={ formStyle.group }>
              <button type="submit" className={ formStyle.button } disabled={ isSubmitting }>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        ) }
      </Formik>
      <DialogBox
        isOpen={ isOpen }
        onClose={ closeDialog }
        title={ title }
        message={ message }
        type={ messageType }
      />
    </div>
  );
}

export default ContactForm;
