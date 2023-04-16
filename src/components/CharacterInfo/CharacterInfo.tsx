import { useMemo } from 'react';
import classes from './CharacterInfo.module.scss';
import Image from 'components/Image/Image';
import CharacterInfoSkeleton from 'components/Skeletons/CharacterInfoSkeleton';
import { useGetCharacterQuery } from 'services/apiService';

interface CharacterInfoProps {
  id: number;
}

const voidCharacter = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};

const CharacterInfo: React.FC<CharacterInfoProps> = ({ id }) => {
  const { data, isFetching, isSuccess } = useGetCharacterQuery(id);

  const character = useMemo(() => {
    if (isSuccess) {
      return data;
    }
    return voidCharacter;
  }, [isSuccess, data]);

  const { name, status, species, gender, origin, image, episode, location } = character;

  return isFetching ? (
    <CharacterInfoSkeleton />
  ) : (
    <>
      <h2 className={classes.title}>{name}</h2>
      <section className={classes.body_wrapper}>
        <section className={classes.image_container}>
          <Image src={image} name={name} />
        </section>
        <section>
          <p>
            <span>Species :</span> {species}
          </p>
          <p>
            <span>Gender :</span> {gender}
          </p>
          <p>
            <span>Status :</span> {status}
          </p>
          <p>
            <span>Origin :</span> {origin.name}
          </p>
          <p>
            <span>Location :</span> {location.name}
          </p>
          <p>
            <span>Episodes:</span> {episode.length} of 51
          </p>
        </section>
      </section>
    </>
  );
};

export default CharacterInfo;
