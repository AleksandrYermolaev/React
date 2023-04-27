type ImageProps = {
  src: string;
  name: string;
};

const Image: React.FC<ImageProps> = ({ src, name }) => {
  return (
    <>
      <img src={src} alt={`Avatar of ${name}`} height={300} width={300} />
    </>
  );
};

export default Image;
