/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Formik, FormikHelpers } from 'formik';
import { styles } from './styles';
import { Domino } from '../../interfaces/Domino';

interface Errors {
    email: string
}

const NewDomino = ({handleSubmit}: any) => {
  return (
    <div css={styles}>
    <h1>Add a domino!</h1>
    <Formik
      initialValues={{ colour: 'blue', value: 1, icon: '' } as Domino}
      onSubmit={(domino: Domino, actions) => {
        handleSubmit(domino);
        actions.setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <select
            name="icon"
            value={values.icon}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: 'block' }}
          >
            <option value="" label="Select" />
            <option value="🍕" label="🍕" />
            <option value="☕" label="☕" />
            <option value="🌭" label="🌭" />
            <option value="🥓" label="🥓" />
            <option value="🍉" label="🍉" />
          </select>
          <input
            type='text'
            name='colour'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.colour}
          />
          {errors.colour && touched.colour && errors.colour}
          <input
            type='number'
            name='value'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.value}
          />
          {errors.value && touched.value && errors.value}
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>);
}

export default NewDomino;