import classes from './Search.module.scss';

type SearchProps = {
  value: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({ value, setValue, placeholder }) => (
  <label className={classes.label}>
    <input
      className={classes.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={setValue}
    />
  </label>
);

export default Search;
