import React from 'react';
import classes from './Forms.module.scss';
import { validateTextInput } from '../../helpers/validateTextInput';
import { validateDateInput } from '../../helpers/validateDateInput';
import { validateCheckInput } from '../../helpers/validateCheckInput';
import Text from '../../components/inputs/Text/Text';
import Date from '../../components/inputs/Date/Date';
import Select from '../../components/inputs/Select/Select';
import Check from '../../components/inputs/Check/Check';
import File from '../../components/inputs/File/File';

class Forms extends React.Component {
  render(): React.ReactNode {
    const { wrapper, form, legend } = classes;
    const selectOptions = ['Single', 'Married', 'Divorced', 'Complicated'];
    const radioOptions = ['Male', 'Female', 'Other'];
    const checkBoxOptions = ['Push message', 'Email'];

    return (
      <section className={wrapper}>
        <form>
          <fieldset className={form}>
            <legend className={legend}>Please, enter your personal data</legend>
            <Text label="Name" validator={validateTextInput} />
            <Text label="Surname" validator={validateTextInput} />
            <Date label="Birthday" validator={validateDateInput} />
            <Select label="Family status" name="family" options={selectOptions} />
            <Check
              label="Gender"
              options={radioOptions}
              validator={validateCheckInput}
              type="radio"
            />
            <File label="Photo" name="avatar" accept="image/*" />
            <Check
              label="Notifications"
              options={checkBoxOptions}
              validator={validateCheckInput}
              type="checkbox"
            />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Forms;
