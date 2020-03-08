/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Formik, FormikHelpers } from 'formik';
import { styles } from './styles';
import { IDomino } from '../../interfaces/IDomino';
import { Emoji } from '../../lib/icons';
import React from 'react';
import { getDomino } from '../../services/DominoService';

interface Errors {
    email: string
}

interface ISomething {
  handleSubmit: any
  domino: IDomino
}

const NewDomino = ({handleSubmit, domino}: ISomething) => {

  return (
    <div css={styles}>
    <h1>Add a dominoji!</h1>
    <Formik
      enableReinitialize
      initialValues={domino}
      onSubmit={(domino: IDomino, actions) => {
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
            name='topIcon'
            value={values.topIcon}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: 'block' }}
          >
            <option value='' label='Select' />
            <option value={Emoji.pizza} label={Emoji.pizza} />
            <option value={Emoji.coffee} label={Emoji.coffee} />
            <option value={Emoji.hotdog} label={Emoji.hotdog} />
            <option value={Emoji.bacon} label={Emoji.bacon} />
          </select>
          <select
            name='bottomIcon'
            value={values.bottomIcon}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ display: 'block' }}
          >
            <option value='' label='Select' />
            <option value={Emoji.pizza} label={Emoji.pizza} />
            <option value={Emoji.coffee} label={Emoji.coffee} />
            <option value={Emoji.hotdog} label={Emoji.hotdog} />
            <option value={Emoji.bacon} label={Emoji.bacon} />
          </select>
          <input
            type='text'
            name='colour'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.colour}
          />
          {errors.colour && touched.colour && errors.colour}
          {errors.bottomIcon && touched.bottomIcon && errors.bottomIcon}
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>);
}

export default NewDomino;