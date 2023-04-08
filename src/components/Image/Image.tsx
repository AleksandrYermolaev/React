import { useState } from 'react';
import ImageSkeleton from 'components/Skeletons/ImageSkeleton';

type ImageProps = {
  src: string;
  name: string;
};

const Image: React.FC<ImageProps> = ({ src, name }) => {
  const [imageIsLoad, setImageIsLoad] = useState<boolean>(false);

  return (
    <>
      {imageIsLoad ? null : <ImageSkeleton />}
      <img
        src={src}
        alt={`Avatar of ${name}`}
        height={300}
        width={300}
        onLoad={() => setImageIsLoad(true)}
      />
    </>
  );
};

export default Image;
