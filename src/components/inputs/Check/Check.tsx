import React from 'react';
import classes from './Check.module.scss';

type CheckState = object;

type CheckProps = {
  type: 'radio' | 'checkbox';
  label: string;
  options: Array<string>;
  errMessage: string;
  getValue: (field: string, value: string | undefined) => void;
};

export class Check extends React.Component<CheckProps, CheckState> {
  checkInput: React.RefObject<HTMLInputElement>[];

  constructor(props: CheckProps) {
    super(props);
    this.checkInput = this.props.options.map(() => React.createRef<HTMLInputElement>());
  }

  handleCheckInput = () => {
    const checkedRef = this.checkInput.filter((ref) => ref.current?.checked);
    const refValue =
      checkedRef.length === 1
        ? checkedRef[0].current?.value
        : checkedRef.map((ref) => ref.current?.value).join(', ');
    this.props.getValue(this.props.label.toLowerCase(), refValue);
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <p>{this.props.label}:</p>
        <div className={classes.container}>
          {this.props.options.map((option, id) => (
            <span key={id}>
              <input
                type={this.props.type}
                name={this.props.label.toLowerCase()}
                value={option.toLowerCase()}
                id={option.toLowerCase()}
                className={classes.input}
                onBlur={this.handleCheckInput}
                onChange={this.handleCheckInput}
                ref={this.checkInput[id]}
              />
              <label htmlFor={option.toLowerCase()} className={classes.label}>
                {option}
              </label>
            </span>
          ))}
          <p className={classes.warning}>{this.props.errMessage}</p>
        </div>
      </div>
    );
  }
}

export default Check;
