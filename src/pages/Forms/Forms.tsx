import Form from 'components/Form/Form';
import FormCard from 'components/FormCard/FormCard';
import React from 'react';
import { UserType } from 'types/types';
import classes from './Forms.module.scss';

type FormProps = object;
type FormState = {
  cards: Array<UserType>;
};

class Forms extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  getData = (cardData: UserType) => {
    this.setState((state) => {
      return {
        cards: [...state.cards, cardData],
      };
    });
  };

  render(): React.ReactNode {
    return (
      <section className={classes.wrapper}>
        <Form setData={this.getData} />
        {this.state.cards.map((card, id) => (
          <FormCard key={`${card.surname}-${id}`} user={card} />
        ))}
      </section>
    );
  }
}

export default Forms;
