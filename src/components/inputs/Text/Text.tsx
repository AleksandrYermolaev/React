import { UseFormRegister } from 'react-hook-form';
import { InputsType } from 'types/types';
import classes from './Text.module.scss';

type TextProps = {
  register: UseFormRegister<InputsType>;
  label: 'Name' | 'Surname';
  errMessage: string;
};

const Text: React.FC<TextProps> = ({ register, label, errMessage }) => {
  const inputName = label.toLowerCase() as 'name' | 'surname';
  return (
    <>
      <label className={classes.label}>
        {label}:
        <div className={classes.container}>
          <input
            type="text"
            {...register(inputName, {
              required: 'field is required',
              minLength: {
                value: 2,
                message: 'min 2 letters',
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

export default Text;
