import { Component } from 'react';

import classes from './CardFooter.module.scss';
import like from '../../assets/icons/like.png';
import watch from '../../assets/icons/eye.png';

type CardFooterProps = {
  likes: number;
  views: number;
  date: Date;
};

type CardFooterState = object;

class CardFooter extends Component<CardFooterProps, CardFooterState> {
  constructor(props: CardFooterProps) {
    super(props);
  }

  render() {
    const { likes, views, date } = this.props;
    return (
      <p className={classes.footer}>
        <span className={classes.info}>
          <img src={like} alt="like" />
          {likes}
        </span>
        <span className={classes.info}>
          <img src={watch} alt="eye" />
          {views}
        </span>
        <span className={classes.date}>{date.toLocaleDateString()}</span>
      </p>
    );
  }
}

export default CardFooter;
