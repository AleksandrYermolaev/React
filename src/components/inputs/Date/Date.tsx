import React from 'react';
import classes from './Date.module.scss';

type DateState = object;

type DateProps = {
  label: string;
  errMessage: string;
  getValue: (field: string, value: number | undefined) => void;
};

export class Date extends React.Component<DateProps, DateState> {
  dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: DateProps) {
    super(props);
    this.dateInput = React.createRef<HTMLInputElement>();
  }

  handleDateInput = () => {
    this.props.getValue(this.props.label.toLowerCase(), this.dateInput.current?.valueAsNumber);
  };

  render() {
    return (
      <>
        <label className={classes.label}>
          {this.props.label}:
          <div className={classes.container}>
            <input
              type="date"
              name={this.props.label.toLowerCase()}
              className={classes.input}
              ref={this.dateInput}
              onChange={this.handleDateInput}
              onBlur={this.handleDateInput}
            />
            <p className={classes.warning}>{this.props.errMessage}</p>
          </div>
        </label>
      </>
    );
  }
}

export default Date;
