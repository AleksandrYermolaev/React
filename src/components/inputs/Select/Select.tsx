import React from 'react';
import classes from './Select.module.scss';

type SelectState = object;

type SelectProps = {
  label: string;
  name: string;
  options: Array<string>;
};

export class Select extends React.Component<SelectProps, SelectState> {
  dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: SelectProps) {
    super(props);
    this.dateInput = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <label className={classes.label}>
        {this.props.label}:
        <select name={this.props.name} className={classes.input}>
          {this.props.options.map((option, id) => (
            <option key={id} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default Select;
