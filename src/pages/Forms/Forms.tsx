import Form from 'components/Form/Form';
import FormCard from 'components/FormCard/FormCard';
import React from 'react';
import { UserType } from 'types/types';
import classes from './Forms.module.scss';

type FormProps = object;
type FormState = {
  cards: Array<UserType>;
  isUpdate: boolean;
};

class Forms extends React.Component<FormProps, FormState> {
  modalTimer: NodeJS.Timeout | null;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      cards: [],
      isUpdate: false,
    };
    this.modalTimer = null;
  }

  getData = (cardData: UserType) => {
    this.setState((state) => {
      return {
        cards: [...state.cards, cardData],
      };
    });
  };

  componentDidUpdate(prevProps: FormProps, prevState: FormState): void {
    if (prevState.cards.length !== this.state.cards.length) {
      this.setState({ isUpdate: true });
      this.modalTimer = setTimeout(() => this.setState({ isUpdate: false }), 1500);
    }
  }

  componentWillUnmount(): void {
    if (this.modalTimer) clearTimeout(this.modalTimer);
  }

  render(): React.ReactNode {
    return (
      <section className={classes.wrapper}>
        <Form setData={this.getData} />
        {this.state.cards.map((card, id) => (
          <FormCard key={`${card.surname}-${id}`} user={card} />
        ))}
        <div className={this.state.isUpdate ? classes.modal : classes.modal_hide}>
          Card has been created!
        </div>
      </section>
    );
  }
}

export default Forms;
