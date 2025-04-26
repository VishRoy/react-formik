
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = (values: any) => {
  console.log('Form data', values);
}

const validate = (values: any) => {
  let errors = {} as any;
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  channel: Yup.string().required('Required')
})

const YoutubeForm = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
            {formik.errors.name && formik.touched.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.errors.email && formik.touched.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}/>
            {formik.errors.channel && formik.touched.channel ? <div style={{color: 'red'}}>{formik.errors.channel}</div> : null}

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm;