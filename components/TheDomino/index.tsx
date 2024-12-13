/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from '@emotion/core'
import { Formik, Form, Field } from 'formik';
import { styles } from './styles';
import { IDomino } from '../../interfaces/IDomino';
import { Emoji } from '../../lib/icons';
import Router from 'next/router'

interface INewDomino {
  handleSubmit: any
  domino: IDomino
  isNew: boolean
}

const TheDomino = ({handleSubmit, domino, isNew}: INewDomino) => {

  let emojis = [ Emoji.bacon, Emoji.coffee, Emoji.hotdog, Emoji.pizza, Emoji.watermelon];

  return (
    <div css={styles}>
      <h1>{isNew ? 'Add' : 'Edit' } a dominoji!</h1>
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
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div style={{backgroundColor: domino.colour}} className='top'>
            <input value={values.topIcon} disabled/>
            <div className="emojis">
              {
                emojis.map((e: string) => {
                return (
                  <Field
                    render={({ form }: any) => (
                      <a className='emojiChoice'
                        onClick={v => {
                          form.setFieldValue('topIcon', e)
                        }}
                      >{e}</a>
                    )}/>
                  );
                }
              )}
            </div>
            </div>
            <div style={{backgroundColor: domino.colour}} className='bottom'>
              <input value={values.bottomIcon} disabled/>
              <div className="emojis">
                {
                emojis.map((e: string) => {
                  return (
                    <Field
                      render={({ form }: any) => (
                        <a className='emojiChoice'
                          onClick={v => {
                            form.setFieldValue('bottomIcon', e)
                          }}
                        >{e}</a>
                      )}/>
                    );
                  }
                )}
              </div>    
            </div>
            <input
              type='hidden'
              name='colour'
              onBlur={handleBlur}
              value={values.colour}
            />
            {errors.colour && touched.colour && errors.colour}
            {errors.bottomIcon && touched.bottomIcon && errors.bottomIcon}
            <button type='submit' disabled={isSubmitting}>
              👍 Save it
            </button>
            <button
                  onClick={() => { 
                    Router.push(`/`)
                  }}
                  >Don't save it 👎
              </button>
          </Form>
          
        )}
      </Formik>
  </div>);
}

export default TheDomino;
