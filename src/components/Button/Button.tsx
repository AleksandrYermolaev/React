import React from 'react';

import classes from './Button.module.scss';

type ButtonState = object;

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <button className={classes.button} type={this.props.type || 'button'}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
