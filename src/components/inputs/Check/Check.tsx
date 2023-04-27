import { UseFormRegister } from 'react-hook-form';
import { InputsType } from 'types/types';
import classes from './Check.module.scss';

export type CheckProps = {
  type: 'radio' | 'checkbox';
  label: string;
  options: Array<string>;
  errMessage: string;
  register: UseFormRegister<InputsType>;
};

const Check: React.FC<CheckProps> = ({ type, label, options, errMessage, register }) => {
  const inputName = label.toLowerCase() as keyof InputsType;
  return (
    <div className={classes.wrapper}>
      <p>{label}:</p>
      <div className={classes.container}>
        {options.map((option, id) => (
          <span key={id}>
            <input
              type={type}
              {...register(inputName, {
                required: 'field is required',
              })}
              value={option.toLowerCase()}
              id={option.toLowerCase()}
              className={classes.input}
            />
            <label htmlFor={option.toLowerCase()} className={classes.label}>
              {option}
            </label>
          </span>
        ))}
        <p className={classes.warning}>{errMessage}</p>
      </div>
    </div>
  );
};

export default Check;
