import { UseFormRegister } from 'react-hook-form';
import { InputsType } from 'types/types';
import classes from './Select.module.scss';

type SelectProps = {
  label: string;
  name: keyof InputsType;
  options: Array<string>;
  register: UseFormRegister<InputsType>;
  errMessage: string;
};

const Select: React.FC<SelectProps> = ({ label, name, options, register, errMessage }) => {
  return (
    <label className={classes.label}>
      {label}:
      <div className={classes.container}>
        <select
          {...register(name, {
            validate: {
              choose: (v) => v !== 'choose it' || 'field is required',
            },
          })}
          className={classes.input}
          defaultValue={options[0].toLowerCase()}
        >
          {options.map((option, id) => (
            <option key={id} value={option.toLowerCase()} disabled={id === 0} data-testid="option">
              {option}
            </option>
          ))}
        </select>
        <p className={classes.warning}>{errMessage}</p>
      </div>
    </label>
  );
};

export default Select;
