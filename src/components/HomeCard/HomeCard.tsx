import React from 'react';

import classes from './HomeCard.module.scss';
import Image from '../Image/Image';
import CardDescription from '../CardDescription/CardDescription';
import CardFooter from '../CardFooter/CardFooter';
import { CardType } from '../../types/types';

type HomeCardProps = {
  cardData: CardType;
};

type HomeCardState = object;

class HomeCard extends React.Component<HomeCardProps, HomeCardState> {
  constructor(props: HomeCardProps) {
    super(props);
  }

  render(): React.ReactNode {
    const {
      cardData: { image, title, subtitle, categories, likes, views, date },
    } = this.props;
    return (
      <article className={classes.article}>
        <Image src={image} />
        <CardDescription title={title} subtitle={subtitle} category={categories} />
        <CardFooter likes={likes} views={views} date={new Date(date)} />
      </article>
    );
  }
}

export default HomeCard;
