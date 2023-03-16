import React from 'react';

import classes from './Search.module.scss';

type SearchState = object;

type SearchProps = {
  value: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
  }
  render() {
    return (
      <label className={classes.label}>
        <input
          className={classes.input}
          type="text"
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.setValue}
        />
      </label>
    );
  }
}

export default Search;
