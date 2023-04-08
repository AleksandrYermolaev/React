import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharacterType } from 'types/types';
import Search from 'components/inputs/Search/Search';
import Button from 'components/Button/Button';
import HomeGrid from 'components/HomeGrid/HomeGrid';
import classes from './Home.module.scss';
import getInitialState from 'helpers/getHomeInitialState';
import Pagination from 'components/Pagination/Pagination';
import characterService from 'services/characterService';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState(getInitialState());
  const [searchParam, setSearchParam] = useSearchParams();
  const [apiData, setApiData] = useState<Array<CharacterType>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const searchQuery = searchParam.get('name');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchValue(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('search', searchValue);
    setCurrentPage(1);
    if (searchValue) {
      setSearchParam({ search: searchValue });
    } else {
      setSearchParam({});
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoaded(false);
    (async () => {
      try {
        const [info, results] = await characterService.getAll(
          searchQuery,
          currentPage,
          abortController.signal
        );
        if (results) {
          setApiData(results);
          setIsLastPage(!info.next);
        } else {
          setApiData([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoaded(true);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [searchQuery, currentPage]);

  useEffect(() => {
    getInitialState() && setSearchParam({ name: getInitialState() });
  }, [setSearchParam]);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Search value={searchValue} setValue={handleInput} placeholder="search..." />
        <Button type="submit">Search</Button>
      </form>
      <HomeGrid data={apiData} isLoaded={isLoaded} />
      {apiData.length ? (
        <Pagination next={nextPage} prev={prevPage} page={currentPage} isLastPage={isLastPage} />
      ) : null}
    </div>
  );
};

export default Home;
