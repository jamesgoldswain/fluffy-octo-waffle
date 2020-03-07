/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Formik, FieldArray } from 'formik';
import { styles } from './styles';
import { IDomino } from '../../interfaces/IDomino';
import { IDominos } from '../../interfaces/IDominos';
import Domino from '../Domino';

const DominoList = ({dominos} : IDominos) => {

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
                    dominos.map((domino: IDomino, index: number) => {
                      return ([
                        <label key={`domino-label.${index}`}>{domino.colour}</label>,
                        <Domino domino={domino} />
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