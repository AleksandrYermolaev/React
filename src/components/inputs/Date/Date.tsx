import React from 'react';
import classes from './Date.module.scss';

type DateState = {
  validityMessage: string;
};

type DateProps = {
  label: string;
  validator: (value: number | undefined) => string;
};

export class Date extends React.Component<DateProps, DateState> {
  dateInput: React.RefObject<HTMLInputElement>;

  constructor(props: DateProps) {
    super(props);
    this.state = {
      validityMessage: '',
    };
    this.dateInput = React.createRef<HTMLInputElement>();
  }

  handleWarning = () => {
    const newMessage = this.props.validator(this.dateInput.current?.valueAsNumber);
    this.setState({ validityMessage: newMessage });
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
              onChange={this.handleWarning}
              onBlur={this.handleWarning}
            />
            <p className={classes.warning}>{this.state.validityMessage}</p>
          </div>
        </label>
      </>
    );
  }
}

export default Date;
