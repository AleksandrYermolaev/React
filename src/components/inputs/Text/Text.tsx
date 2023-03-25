import React from 'react';
import classes from './Text.module.scss';

type TextState = object;

type TextProps = {
  label: string;
  errMessage: string;
  getValue: (field: string, value: string | undefined) => void;
};

export class Text extends React.Component<TextProps, TextState> {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props: TextProps) {
    super(props);
    this.textInput = React.createRef<HTMLInputElement>();
  }

  handleTextInput = () => {
    this.props.getValue(this.props.label.toLowerCase(), this.textInput.current?.value);
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
              onChange={this.handleTextInput}
              onBlur={this.handleTextInput}
            />
            <p className={classes.warning}>{this.props.errMessage}</p>
          </div>
        </label>
      </>
    );
  }
}

export default Text;
