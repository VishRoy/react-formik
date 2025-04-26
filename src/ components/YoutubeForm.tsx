
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = (values: any) => {
  console.log('Form data', values);
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  channel: Yup.string().required('Required')
})

const YoutubeForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
            <label htmlFor='name'>Name</label>
            <Field type='text' id='name' name='name' />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="name" component="div" />
            </div>
            <label htmlFor='email'>Email</label>
            <Field type='text' id='email' name='email' />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="email" component="div" />
            </div>
            <label htmlFor='channel'>Channel</label>
            <Field type='text' id='channel' name='channel' />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="channel" component="div" />
            </div>

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm;