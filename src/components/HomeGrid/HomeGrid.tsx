import { CardType } from '../../types/types';
import HomeCard from '../HomeCard/HomeCard';
import classes from './HomeGrid.module.scss';

type HomeGridProps = {
  data: Array<CardType>;
};

const HomeGrid: React.FC<HomeGridProps> = ({ data }) => (
  <section className={classes.wrapper}>
    {data.map((card) => (
      <HomeCard key={card.date} cardData={card} />
    ))}
  </section>
);

export default HomeGrid;
