import React from 'react';

import classes from './HomeCard.module.scss';
import Image from '../Image/Image';
import CardDescription from '../CardDescription/CardDescription';
import CardFooter from '../CardFooter/CardFooter';

type HomeCardState = object;

type HomeCardProps = object;

class HomeCard extends React.Component<HomeCardProps, HomeCardState> {
  constructor(props: HomeCardProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <article className={classes.article}>
        <Image src="" />
        <CardDescription
          title="Card title"
          subtitle="Lodsfasfsd asdfg sdfg fg sfg sfg sfgs fgs"
          category="sdf s "
        />
        <CardFooter likes={157} views={2086} />
      </article>
    );
  }
}

export default HomeCard;
