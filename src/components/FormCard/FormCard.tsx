import classes from './FormCard.module.scss';
import { UserType } from 'types/types';

const FormCard: React.FC<{ user: UserType }> = ({
  user: { name, surname, birthday, family, gender, avatar, notifications },
}) => {
  const getYearsOld = (date: number): string => {
    const year = new Date(Date.now()).getFullYear() - new Date(date).getFullYear();
    return `${year} year(s) old`;
  };

  return (
    <article className={classes.article}>
      <div className={classes.top}>
        <div className={classes.img_container}>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            style={{
              maxHeight: '200px',
              maxWidth: '180px',
            }}
          />
        </div>
        <div className={classes.info_container}>
          <h4 className={classes.name}>{`${name} ${surname}`}</h4>
          <p>{getYearsOld(birthday)}</p>
        </div>
      </div>
      <div className={classes.bottom}>
        <p>Family: {family}</p>
        <p>Gender: {gender}</p>
        <p>Notifications: {notifications}</p>
      </div>
    </article>
  );
};

export default FormCard;
