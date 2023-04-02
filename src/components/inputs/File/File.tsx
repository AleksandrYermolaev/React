import { UseFormRegister } from 'react-hook-form';
import { InputsType } from 'types/types';
import classes from './File.module.scss';

type FileProps = {
  label: string;
  name: keyof InputsType;
  accept: string;
  register: UseFormRegister<InputsType>;
  errMessage: string;
};

const File: React.FC<FileProps> = ({ label, name, accept, register, errMessage }) => {
  return (
    <label className={classes.label}>
      {label}:
      <div>
        <input
          type="file"
          {...register(name, {
            required: 'field is required',
          })}
          className={classes.input}
          accept={accept}
        />
        <p className={classes.warning}>{errMessage}</p>
      </div>
    </label>
  );
};

export default File;
