import React, { FormEvent } from 'react';
import classes from './Form.module.scss';
import Text from 'components/inputs/Text/Text';
import Date from 'components/inputs/Date/Date';
import Select from 'components/inputs/Select/Select';
import Check from 'components/inputs/Check/Check';
import File from 'components/inputs/File/File';
import Button from 'components/Button/Button';
import validateInputs from 'helpers/validateInputs';
import setErrorMessage from 'helpers/setErrorMessage';

type FormProps = object;
type FormState = {
  formFields: {
    [x: string]: string | number;
  };
  errMessages: {
    name: string;
    surname: string;
    birthday: string;
    family: string;
    gender: string;
    avatar: string;
    notifications: string;
  };
};

class Form extends React.Component<FormProps, FormState> {
  checkInput: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      formFields: {
        name: '',
        surname: '',
        birthday: 0,
        family: '',
        gender: '',
        avatar: '',
        notifications: '',
      },
      errMessages: {
        name: '',
        surname: '',
        birthday: '',
        family: '',
        gender: '',
        avatar: '',
        notifications: '',
      },
    };
    this.checkInput = React.createRef<HTMLInputElement>();
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isFormValid: Array<boolean> = [];
    for (const key in this.state.formFields) {
      const isFieldValid = validateInputs(key, this.state.formFields[key]);
      if (!isFieldValid) {
        const message = setErrorMessage(key, this.state.formFields[key]);
        this.setState((state) => {
          return { errMessages: { ...state.errMessages, [key]: message } };
        });
      } else {
        this.setState((state) => {
          return { errMessages: { ...state.errMessages, [key]: '' } };
        });
      }
      isFormValid.push(isFieldValid);
    }
    if (isFormValid.includes(false)) {
      return;
    }
  };

  setFormField = (field: string, value: string | number | undefined): void => {
    if (value) {
      this.setState({ formFields: { ...this.state.formFields, [field]: value } });
    } else {
      this.setState({ formFields: { ...this.state.formFields, [field]: '' } });
    }
  };

  render(): React.ReactNode {
    const { form, legend } = classes;
    const selectOptions = ['Choose it', 'Single', 'Married', 'Divorced', 'Complicated'];
    const radioOptions = ['Male', 'Female', 'Other'];
    const checkBoxOptions = ['Push message', 'Email'];

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className={form}>
          <legend className={legend}>Please, enter your personal data</legend>
          <Text
            label="Name"
            getValue={this.setFormField}
            errMessage={this.state.errMessages.name}
          />
          <Text
            label="Surname"
            getValue={this.setFormField}
            errMessage={this.state.errMessages.surname}
          />
          <Date
            label="Birthday"
            errMessage={this.state.errMessages.birthday}
            getValue={this.setFormField}
          />
          <Select
            label="Family status"
            name="family"
            options={selectOptions}
            getValue={this.setFormField}
            errMessage={this.state.errMessages.family}
          />
          <Check
            label="Gender"
            options={radioOptions}
            errMessage={this.state.errMessages.gender}
            type="radio"
            getValue={this.setFormField}
          />
          <File
            label="Photo"
            name="avatar"
            accept="image/*"
            getValue={this.setFormField}
            errMessage={this.state.errMessages.avatar}
          />
          <Check
            label="Notifications"
            options={checkBoxOptions}
            errMessage={this.state.errMessages.notifications}
            type="checkbox"
            getValue={this.setFormField}
          />
          <div className={classes.submit}>
            <Button type="submit">Submit</Button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
