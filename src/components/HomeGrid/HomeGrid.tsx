import { Component } from 'react';
import { CardType } from '../../types/types';
import HomeCard from '../HomeCard/HomeCard';
import classes from './HomeGrid.module.scss';

type HomeGridState = object;

type HomeGridProps = {
  data: Array<CardType>;
};

class HomeGrid extends Component<HomeGridProps, HomeGridState> {
  constructor(props: HomeGridProps) {
    super(props);
  }

  render() {
    return (
      <section className={classes.wrapper}>
        {this.props.data.map((card) => (
          <HomeCard key={card.date} cardData={card} />
        ))}
      </section>
    );
  }
}

export default HomeGrid;
