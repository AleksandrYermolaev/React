import Form from 'components/Form/Form';
import FormCard from 'components/FormCard/FormCard';
import { useEffect, useState } from 'react';
import { UserType } from 'types/types';
import classes from './Forms.module.scss';

const Forms: React.FC = () => {
  const [cards, setCards] = useState<UserType[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  console.log('get new instance!');
  const getData = (cardData: UserType): void => setCards([...cards, cardData]);

  useEffect(() => {
    if (!cards.length) return;
    setIsUpdate(true);
    const timer = setTimeout(() => setIsUpdate(false), 1500);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [cards]);

  return (
    <section className={classes.wrapper}>
      <Form setData={getData} />
      {cards.map((card, id) => (
        <FormCard key={`${card.surname}-${id}`} user={card} />
      ))}
      <div className={isUpdate ? classes.modal : classes.modal_hide}>Card has been created!</div>
    </section>
  );
};

export default Forms;
