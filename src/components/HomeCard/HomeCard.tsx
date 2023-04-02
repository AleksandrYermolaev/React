import classes from './HomeCard.module.scss';
import Image from '../Image/Image';
import CardDescription from '../CardDescription/CardDescription';
import CardFooter from '../CardFooter/CardFooter';
import { CardType } from '../../types/types';

type HomeCardProps = {
  cardData: CardType;
};

const HomeCard: React.FC<HomeCardProps> = ({ cardData }) => {
  const { image, title, subtitle, categories, likes, views, date } = cardData;

  return (
    <article className={classes.article}>
      <Image src={image} />
      <CardDescription title={title} subtitle={subtitle} category={categories} />
      <CardFooter likes={likes} views={views} date={new Date(date)} />
    </article>
  );
};

export default HomeCard;
