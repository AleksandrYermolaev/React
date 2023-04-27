import { useForm, SubmitHandler } from 'react-hook-form';
import classes from './Form.module.scss';
import Text from 'components/inputs/Text/Text';
import DateInput from 'components/inputs/Date/Date';
import Select from 'components/inputs/Select/Select';
import Check from 'components/inputs/Check/Check';
import File from 'components/inputs/File/File';
import Button from 'components/Button/Button';
import { InputsType, UserType } from 'types/types';

type FormProps = {
  setData: (user: UserType) => void;
};

const Form: React.FC<FormProps> = ({ setData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputsType>();

  const selectOptions = ['Choose it', 'Single', 'Married', 'Divorced', 'Complicated'];
  const radioOptions = ['Male', 'Female', 'Other'];
  const checkBoxOptions = ['Push message', 'Email'];

  const handleImage = (image: FileList): string => {
    const [file] = image;
    const url = file ? URL.createObjectURL(file) : '';
    return url;
  };

  const handleDate = (date: string) => {
    return new Date(date).getTime();
  };

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    const user: UserType = {
      name: data.name,
      surname: data.surname,
      birthday: handleDate(data.birthday),
      family: data.family,
      gender: data.gender,
      avatar: handleImage(data.avatar),
      notifications: data.notifications.join(', '),
    };
    setData(user);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={classes.form}>
        <legend className={classes.legend}>Please, enter your personal data</legend>
        <Text label="Name" register={register} errMessage={errors.name?.message || ''} />
        <Text label="Surname" register={register} errMessage={errors.surname?.message || ''} />
        <DateInput
          label="Birthday"
          register={register}
          errMessage={errors.birthday?.message || ''}
        />
        <Select
          label="Family status"
          name="family"
          options={selectOptions}
          register={register}
          errMessage={errors.family?.message || ''}
        />
        <Check
          label="Gender"
          register={register}
          options={radioOptions}
          errMessage={errors.gender?.message || ''}
          type="radio"
        />
        <File
          register={register}
          label="Photo"
          name="avatar"
          accept="image/*"
          errMessage={errors.avatar?.message || ''}
        />
        <Check
          label="Notifications"
          register={register}
          options={checkBoxOptions}
          errMessage={errors.notifications?.message || ''}
          type="checkbox"
        />
        <div className={classes.submit}>
          <Button type="submit">Submit</Button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
