import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classes from './Button.module.scss';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => (
  <button className={classes.button} type={type || 'button'} {...props}>
    {children}
  </button>
);

export default Button;
