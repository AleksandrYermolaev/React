import { useCallback, useEffect, useState } from 'react';
import Search from '../../components/inputs/Search/Search';
import Button from '../../components/Button/Button';
import HomeGrid from '../../components/HomeGrid/HomeGrid';
import classes from './Home.module.scss';
import data from '../../assets/data/mockData.json';
import getInitialState from '../../helpers/getHomeInitialState';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState(getInitialState());

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(event.target.value),
    [setSearchValue]
  );

  useEffect(() => {
    return () => {
      if (searchValue) localStorage.setItem('search', searchValue);
    };
  }, [searchValue]);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Search value={searchValue} setValue={handleInput} placeholder="search..." />
        <Button>Search</Button>
      </form>
      <HomeGrid data={data} />
    </div>
  );
};

export default Home;
