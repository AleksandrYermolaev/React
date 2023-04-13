import Form from 'components/Form/Form';
import FormCard from 'components/FormCard/FormCard';
import { useState } from 'react';
import { UserType } from 'types/types';
import classes from './Forms.module.scss';
import { useAppDispatch, useAppSelector } from 'hooks/stateHooks';
import { selectCards, addCard } from 'store/formCardsSlice';

const Forms: React.FC = () => {
  const cards = useAppSelector(selectCards);
  const dispatch = useAppDispatch();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const setCard = (cardData: UserType): void => {
    dispatch(addCard(cardData));
    setIsUpdate(true);
    setTimeout(() => setIsUpdate(false), 1500);
  };

  return (
    <section className={classes.wrapper}>
      <Form setData={setCard} />
      {cards.map((card, id) => (
        <FormCard key={`${card.surname}-${id}`} user={card} />
      ))}
      <div className={isUpdate ? classes.modal : classes.modal_hide}>Card has been created!</div>
    </section>
  );
};

export default Forms;
