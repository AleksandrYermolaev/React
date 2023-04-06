import HomeCardSkeleton from 'components/Skeletons/HomeCardSkeleton';
import classes from './HomeCard.module.scss';
import { useState } from 'react';
import ImageSkeleton from 'components/Skeletons/ImageSkeleton';

type HomeCardProps = {
  image: string;
  name: string;
  isLoaded: boolean;
};

const HomeCard: React.FC<HomeCardProps> = ({ image, name, isLoaded }) => {
  const [imageIsLoad, setImageIsLoad] = useState<boolean>(false);

  return !isLoaded ? (
    <HomeCardSkeleton />
  ) : (
    <article className={classes.article}>
      {imageIsLoad ? null : <ImageSkeleton />}
      <img
        src={image}
        alt={`Avatar of ${name}`}
        height={300}
        width={300}
        onLoad={() => setImageIsLoad(true)}
      />
      <p className={classes.name}>{name}</p>
    </article>
  );
};

export default HomeCard;
