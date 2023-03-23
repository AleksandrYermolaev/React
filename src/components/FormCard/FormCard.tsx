import Image from 'components/Image/Image';
import React, { Component } from 'react';
import { UserType } from 'types/types';
import classes from './FormCard.module.scss';

type FormCardProps = {
  user: UserType;
};
type FormCardState = object;

export class FormCard extends Component<FormCardProps, FormCardState> {
  constructor(props: FormCardProps) {
    super(props);
  }

  // getYearsOld = (date: number): string => {
  //   const year = new Date(Date.now() - date).getFullYear;
  // };

  render() {
    const { name, surname, birthday, family, gender, avatar, notifications } = this.props.user;
    return (
      <article className={classes.article}>
        <div className={classes.top}>
          <div className={classes.img_container}>
            <Image src={avatar} />
          </div>
          <div className={classes.info_container}>
            <h4 className={classes.name}>{`${name} ${surname}`}</h4>
            <p>{birthday}</p>
          </div>
        </div>
        <div className={classes.bottom}>
          <p>Family: {family}</p>
          <p>Gender: {gender}</p>
          <p>Notifications: {notifications}</p>
        </div>
      </article>
    );
  }
}

export default FormCard;
