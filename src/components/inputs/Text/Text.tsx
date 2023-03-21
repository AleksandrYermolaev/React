import React from 'react';
import classes from './Text.module.scss';

type TextState = {
  validityMessage: string;
};

type TextProps = {
  label: string;
  validator: (value: string | undefined) => string;
};

export class Text extends React.Component<TextProps, TextState> {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props: TextProps) {
    super(props);
    this.state = {
      validityMessage: '',
    };
    this.textInput = React.createRef<HTMLInputElement>();
  }

  handleWarning = () => {
    const newMessage = this.props.validator(this.textInput.current?.value);
    this.setState({ validityMessage: newMessage });
  };

  render() {
    return (
      <>
        <label className={classes.label}>
          {this.props.label}:
          <div className={classes.container}>
            <input
              type="text"
              name={this.props.label.toLowerCase()}
              className={classes.input}
              ref={this.textInput}
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

export default Text;
