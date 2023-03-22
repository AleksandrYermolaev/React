import Form from 'components/Form/Form';
import React from 'react';
import classes from './Forms.module.scss';

type FormProps = object;
type FormState = object;

class Forms extends React.Component<FormProps, FormState> {
  render(): React.ReactNode {
    return (
      <section className={classes.wrapper}>
        <Form />
      </section>
    );
  }
}

export default Forms;
