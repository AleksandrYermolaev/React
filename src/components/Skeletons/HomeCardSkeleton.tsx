import ContentLoader from 'react-content-loader';

const HomeCardSkeleton = () => {
  return (
    <ContentLoader
      viewBox="0 0 300 350"
      width={300}
      height={350}
      backgroundColor="#718071"
      foregroundColor="#4d754d"
    >
      <rect x="0" y="0" rx="5" ry="5" width="300" height="300" />
      <rect x="0" y="310" rx="5" ry="5" width="180" height="10" />
    </ContentLoader>
  );
};

export default HomeCardSkeleton;
