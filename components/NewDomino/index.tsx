/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Formik, FormikHelpers } from 'formik';
import { styles } from './styles';
import { IDomino } from '../../interfaces/IDomino';
import { Emoji } from '../../lib/icons';
import Router from 'next/router'

interface INewDomino {
  handleSubmit: any
  domino: IDomino
}

const NewDomino = ({handleSubmit, domino}: INewDomino) => {

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
          <div style={{backgroundColor: domino.colour}} className='top'>
      
            <select
              name='topIcon'
              value={values.topIcon}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: 'block' }}
            >
              <option value={Emoji.pizza} label={Emoji.pizza} />
              <option value={Emoji.coffee} label={Emoji.coffee} />
              <option value={Emoji.hotdog} label={Emoji.hotdog} />
              <option value={Emoji.bacon} label={Emoji.bacon} />
            </select>

          </div>
          <div style={{backgroundColor: domino.colour}} className='bottom'>
            <select
              name='bottomIcon'
              value={values.bottomIcon}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ display: 'block' }}
            >
              <option value={Emoji.pizza} label={Emoji.pizza} />
              <option value={Emoji.coffee} label={Emoji.coffee} />
              <option value={Emoji.hotdog} label={Emoji.hotdog} />
              <option value={Emoji.bacon} label={Emoji.bacon} />
            </select>
          </div>
          <input
            type='hidden'
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
          <button
                type="button"
                onClick={() => { 
                  Router.push(`/index`)
                }}
                >Cancel
            </button>
        </form>
        
      )}
    </Formik>
  </div>);
}

export default NewDomino;
