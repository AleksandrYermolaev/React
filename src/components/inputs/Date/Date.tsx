import { UseFormRegister } from 'react-hook-form';
import { InputsType } from 'types/types';
import classes from './Date.module.scss';

type DateProps = {
  label: string;
  register: UseFormRegister<InputsType>;
  errMessage: string;
};

const DateInput: React.FC<DateProps> = ({ label, register, errMessage }) => {
  return (
    <>
      <label className={classes.label}>
        {label}:
        <div className={classes.container}>
          <input
            type="date"
            {...register('birthday', {
              required: 'field is required',
              validate: {
                moreThan: (v) =>
                  new Date(v).getTime() < 1104537600000 || 'only 18 y.o. users allowed',
              },
            })}
            className={classes.input}
          />
          <p className={classes.warning}>{errMessage}</p>
        </div>
      </label>
    </>
  );
};

export default DateInput;
