import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .min(1, 'Nothing is free!')
    .max(1000, 'Too Expensive!')
    .required('Required'),
});

const ProductForm = ({ product }) => {
  return (
    <React.Fragment>
      <h1>Edit User</h1>
      <Formik
        initialValues={product}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          console.log('Submiting....')
        }}
        render={({
          values,
          errors,
          status,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && <div>{errors.name}</div>}
            <input
              type="text"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && <div>{errors.price}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      />
    </React.Fragment>
  )
}


export default ProductForm
