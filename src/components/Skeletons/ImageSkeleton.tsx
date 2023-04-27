import ContentLoader from 'react-content-loader';
import classes from './ImageSkeleton.module.scss';

const ImageSkeleton = () => {
  return (
    <ContentLoader
      className={classes.wrapper}
      viewBox="0 0 300 300"
      width={300}
      height={300}
      backgroundColor="#718071"
      foregroundColor="#4d754d"
    >
      <rect x="0" y="0" rx="5" ry="5" width="300" height="300" />
    </ContentLoader>
  );
};

export default ImageSkeleton;
