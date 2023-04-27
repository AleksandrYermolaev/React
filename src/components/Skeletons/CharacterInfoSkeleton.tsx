import ContentLoader from 'react-content-loader';

const CharacterInfoSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 530 345"
      width={530}
      height={345}
      backgroundColor="#718071"
      foregroundColor="#4d754d"
    >
      <rect x="150" y="0" rx="5" ry="5" width="200" height="30" />
      <rect x="0" y="45" rx="5" ry="5" width="300" height="300" />
      <rect x="332" y="45" rx="5" ry="5" width="180" height="20" />
      <rect x="332" y="75" rx="5" ry="5" width="160" height="20" />
      <rect x="332" y="105" rx="5" ry="5" width="170" height="20" />
      <rect x="332" y="135" rx="5" ry="5" width="160" height="20" />
      <rect x="332" y="165" rx="5" ry="5" width="180" height="20" />
      <rect x="332" y="195" rx="5" ry="5" width="150" height="20" />
    </ContentLoader>
  );
};

export default CharacterInfoSkeleton;
