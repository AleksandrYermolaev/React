import { CharacterType } from '../../types/types';
import HomeCard from '../HomeCard/HomeCard';
import classes from './HomeGrid.module.scss';

type HomeGridProps = {
  data: Array<CharacterType>;
  isLoaded: boolean;
};

const HomeGrid: React.FC<HomeGridProps> = ({ data, isLoaded }) => (
  <section className={classes.wrapper}>
    {data.length ? (
      data.map((character) => (
        <HomeCard
          key={character.id}
          image={character.image}
          name={character.name}
          isLoaded={isLoaded}
        />
      ))
    ) : (
      <p className={classes.not_found}>Well, you figured it out! This character does not exist.</p>
    )}
  </section>
);

export default HomeGrid;
