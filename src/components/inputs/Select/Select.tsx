import React from 'react';
import classes from './Select.module.scss';

type SelectState = object;

type SelectProps = {
  label: string;
  name: string;
  options: Array<string>;
  getValue: (field: string, value: string | undefined) => void;
  errMessage: string;
};

export class Select extends React.Component<SelectProps, SelectState> {
  selectInput: React.RefObject<HTMLSelectElement>;

  constructor(props: SelectProps) {
    super(props);
    this.selectInput = React.createRef<HTMLSelectElement>();
  }

  handleSelect = () => {
    this.props.getValue(this.props.name, this.selectInput.current?.value);
  };

  render() {
    return (
      <label className={classes.label}>
        {this.props.label}:
        <div className={classes.container}>
          <select
            name={this.props.name}
            className={classes.input}
            ref={this.selectInput}
            onChange={this.handleSelect}
            defaultValue={this.props.options[0].toLowerCase()}
          >
            {this.props.options.map((option, id) => (
              <option
                key={id}
                value={option.toLowerCase()}
                disabled={id === 0}
                data-testid="option"
              >
                {option}
              </option>
            ))}
          </select>
          <p className={classes.warning}>{this.props.errMessage}</p>
        </div>
      </label>
    );
  }
}

export default Select;
