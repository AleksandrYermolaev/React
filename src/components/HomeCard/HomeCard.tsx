import classes from './HomeCard.module.scss';

type HomeCardProps = {
  image: string;
  name: string;
};

const HomeCard: React.FC<HomeCardProps> = ({ image, name }) => {
  return (
    <article className={classes.article}>
      <img src={image} alt={`Avatar of ${name}`} height={300} width={300} />
      <p className={classes.name}>{name}</p>
    </article>
  );
};

export default HomeCard;
