import { Component } from 'react';
import classes from './CardDescription.module.scss';

type CardDescriptionProps = {
  title: string;
  subtitle: string;
  category: string;
};

type CardDescriptionState = object;

class CardDescription extends Component<CardDescriptionProps, CardDescriptionState> {
  constructor(props: CardDescriptionProps) {
    super(props);
  }

  render() {
    const { title, subtitle, category } = this.props;
    return (
      <section className={classes.desc}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.subtitle}>{subtitle}</p>
        <div className={classes.divider} />
        <p>Categories: {category}</p>
      </section>
    );
  }
}

export default CardDescription;
