import React from 'react';

import Search from '../../components/inputs/Search/Search';
import Button from '../../components/Button/Button';
import HomeGrid from '../../components/HomeGrid/HomeGrid';
import classes from './Home.module.scss';
import data from '../../assets/data/mockData.json';
import getInitialState from '../../helpers/getHomeInitialState';

type HomeProps = object;

type HomeState = {
  searchValue: string;
};

class Home extends React.Component<HomeProps, HomeState> {
  state = {
    searchValue: getInitialState(),
  };

  handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchValue: event.target.value });
  };

  componentWillUnmount(): void {
    if (this.state.searchValue) localStorage.setItem('search', this.state.searchValue);
  }

  render(): React.ReactNode {
    return (
      <div className={classes.wrapper}>
        <form className={classes.form}>
          <Search
            value={this.state.searchValue}
            setValue={this.handleInput}
            placeholder="search..."
          />
          <Button>Search</Button>
        </form>
        <HomeGrid data={data} />
      </div>
    );
  }
}

export default Home;
