import React from 'react';
import classes from './Check.module.scss';

type CheckState = {
  validityMessage: string;
};

type CheckProps = {
  type: 'radio' | 'checkbox';
  label: string;
  options: Array<string>;
  validator: (value: boolean | undefined) => string;
};

export class Check extends React.Component<CheckProps, CheckState> {
  checkInput: React.RefObject<HTMLInputElement>[];

  constructor(props: CheckProps) {
    super(props);
    this.state = {
      validityMessage: '',
    };
    this.checkInput = this.props.options.map(() => React.createRef<HTMLInputElement>());
  }

  handleWarning = () => {
    const newMessages = this.checkInput.map((ref) => this.props.validator(ref.current?.checked));
    const newMessage = newMessages.includes('') ? '' : 'field is required';
    this.setState({ validityMessage: newMessage });
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
                onBlur={this.handleWarning}
                ref={this.checkInput[id]}
              />
              <label htmlFor={option.toLowerCase()} className={classes.label}>
                {option}
              </label>
            </span>
          ))}
          <p className={classes.warning}>{this.state.validityMessage}</p>
        </div>
      </div>
    );
  }
}

export default Check;
