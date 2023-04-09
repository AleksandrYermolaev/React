import { useState } from 'react';
import HomeCardSkeleton from 'components/Skeletons/HomeCardSkeleton';
import classes from './HomeCard.module.scss';
import Modal from 'components/Modal/Modal';
import CharacterInfo from 'components/CharacterInfo/CharacterInfo';
import Image from 'components/Image/Image';

type HomeCardProps = {
  image: string;
  name: string;
  isLoaded: boolean;
  id: number;
};

const HomeCard: React.FC<HomeCardProps> = ({ image, name, isLoaded, id }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (event: React.MouseEvent): void => {
    event.stopPropagation();
    setIsModalOpen(false);
  };

  return !isLoaded ? (
    <HomeCardSkeleton />
  ) : (
    <article className={classes.article} onClick={handleOpenModal}>
      <Image src={image} name={name} />
      <p className={classes.name}>{name}</p>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <CharacterInfo id={id} />
      </Modal>
    </article>
  );
};

export default HomeCard;
