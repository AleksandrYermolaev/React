import classes from './CardFooter.module.scss';
import like from '../../assets/icons/like.png';
import watch from '../../assets/icons/eye.png';

type CardFooterProps = {
  likes: number;
  views: number;
  date: Date;
};

const CardFooter: React.FC<CardFooterProps> = ({ likes, views, date }) => (
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

export default CardFooter;
