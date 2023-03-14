import { Component } from 'react';
import classes from './Image.module.scss';

type ImageProps = {
  src: string;
};

type ImageState = object;

class Image extends Component<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props);
  }

  render() {
    return (
      <div className={classes.image_container}>
        <img className={classes.image} src={this.props.src} alt="card image" />
      </div>
    );
  }
}

export default Image;
