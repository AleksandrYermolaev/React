import classes from './Button.module.scss';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, children }) => (
  <button className={classes.button} type={type || 'button'}>
    {children}
  </button>
);

export default Button;
