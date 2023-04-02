import classes from './Image.module.scss';

type ImageProps = {
  src: string;
};

const Image: React.FC<ImageProps> = ({ src }) => (
  <div className={classes.image_container}>
    <img className={classes.image} src={src} alt="card image" />
  </div>
);

export default Image;
