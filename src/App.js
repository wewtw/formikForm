// importing logos "import logo from './logo.svg';""
//to add formik to the app type in npm install formik --save
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//this div named formDiv came from react page it works as a form and validates for more visit "https://formik.org/docs/overview"
function App() {
  return (
    <div id='formDiv'>

    <h1>Log In</h1>

    <Formik

      initialValues={{ emailField: '', pswField: '' }}
    //this function validates the email and returns an error if invalid
      validate={values => {

        const errors = {};
        

        if (!values.emailField || !values.pswField) {

          errors.emailField = 'Field required';
          errors.pswField = 'Field required';

        } 
        else if (

          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField) 
          //&& !/^[A-Za-z]\w{4,10}$/i.test(values.pswField))
  

        )
        {

          errors.emailField = 'Username should be an email';
          errors.pswField = 'Password is too short'

        }
        
        return errors;

      }}

      onSubmit={(values, { setSubmitting }) => {

        setTimeout(() => {

          alert(`User` + {values} + 'Login Successful!');
          console.log((values));

          setSubmitting(false);

        }, 100);

      }}

    >

      {({ isSubmitting }) => (

        <Form className='subForm'>
          Enter Email:<Field type="email" name="emailField" id="emailField" />

          <ErrorMessage name="emailField" id="emailError" component="div" />

          Enter Password:<Field type="password" name="pswField" id="pswField" minlength="4"  required/>

          <ErrorMessage name="pswField" id="pswError" component="div" />

          <button type="submit" id="submitBtn" disabled={isSubmitting}>

            Submit

          </button>
        
        </Form>

      )}

    </Formik>
    <p>Copy paste, save time = 1236@gmail.com & 1236</p>

  </div>

);
}



export default App;
