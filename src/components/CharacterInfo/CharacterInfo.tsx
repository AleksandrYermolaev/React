import { CharacterType } from 'types/types';
import classes from './CharacterInfo.module.scss';
import { useEffect, useState } from 'react';
import characterService from 'services/characterService';
import Image from 'components/Image/Image';
import CharacterInfoSkeleton from 'components/Skeletons/CharacterInfoSkeleton';

interface CharacterInfoProps {
  id: number;
}

const initialCharacterState = {
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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [character, setCharacter] = useState<CharacterType>(initialCharacterState);

  useEffect(() => {
    setIsLoaded(false);
    (async () => {
      try {
        const character = await characterService.getCharacterById(id);
        setCharacter(character);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, [id]);

  const { name, status, species, gender, origin, image, episode, location } = character;

  return !isLoaded ? (
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
