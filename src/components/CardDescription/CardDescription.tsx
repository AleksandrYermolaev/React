import classes from './CardDescription.module.scss';

type CardDescriptionProps = {
  title: string;
  subtitle: string;
  category: string;
};

const CardDescription: React.FC<CardDescriptionProps> = ({ title, subtitle, category }) => (
  <section className={classes.desc}>
    <h2 className={classes.title}>{title}</h2>
    <p className={classes.subtitle}>{subtitle}</p>
    <div className={classes.divider} />
    <p>Categories: {category}</p>
  </section>
);

export default CardDescription;
