/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Formik, FieldArray } from 'formik';
import { styles } from './styles';
import { Domino } from '../../interfaces/Domino';
import { Dominos } from '../../interfaces/Dominos';

import { DominoBackground } from '../../icons/DominoBackground';

const DominoList = ({dominos} : Dominos) => {

  return (
    
    <div css={styles}>
    <h1>Your dominos!</h1>
    <Formik
      enableReinitialize={true}
      initialValues={ dominos } 
      onSubmit={(actions) => {
        setTimeout(() => {
          //actions.setSubmitting(false);
        }, 400);
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
         
          <FieldArray name="dominos">
            {({ form, ...fieldArrayHelpers }) => {
              const onAddClick = () => {
                fieldArrayHelpers.push({
                  id: dominos.length,
                  content: "",
                  isCompleted: false
                });
              };

              return (
                <>
                  {
                    dominos.map((domino: Domino, index: number) => {
                      return ([
                        <label key={`domino-label.${index}`}>{domino.colour}</label>,
                        <span>{domino.icon}</span>,
                        <DominoBackground />,
                        <input
                          key={`domino-input.${index}`}
                          type='checkbox'
                          name={`dominos.${index}`}
                          value={domino.colour} />
                          ]);
                        }
                  )}
                </>
              );
            }}
          </FieldArray>
        </form>
      )}
    </Formik>
  </div>);
}
export default DominoList;