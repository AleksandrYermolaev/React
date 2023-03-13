import React from 'react';

import classes from './HomeCard.module.scss';
import like from '../../assets/icons/like.png';
import watch from '../../assets/icons/eye.png';

type HomeCardState = object;

type HomeCardProps = object;

class HomeCard extends React.Component<HomeCardProps, HomeCardState> {
  constructor(props: HomeCardProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <article className={classes.article}>
        <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
          alt="card image"
        />
        <section className={classes.desc}>
          <h2 className={classes.title}>Card Title</h2>
          <p className={classes.subtitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni blanditiis, similique
            nostrum consequatur iste iure voluptas reiciendis? Aliquam, repellat illum.
          </p>
          <div className={classes.divider} />
          <p>Lorem ipsum dolor sit amet.</p>
        </section>
        <p className={classes.footer}>
          <span className={classes.info}>
            <img src={like} alt="like" />
            157
          </span>
          <span className={classes.info}>
            <img src={watch} alt="like" />
            2075
          </span>
          <span className={classes.date}>15.03.2023</span>
        </p>
      </article>
    );
  }
}

export default HomeCard;
