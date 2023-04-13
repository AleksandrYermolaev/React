import { useCallback, useEffect, useState } from 'react';
import classes from './Home.module.scss';
import Search from 'components/inputs/Search/Search';
import Button from 'components/Button/Button';
import HomeGrid from 'components/HomeGrid/HomeGrid';
import Pagination from 'components/Pagination/Pagination';
import characterService from 'services/characterService';
import { useAppDispatch, useAppSelector } from 'hooks/stateHooks';
import { selectSearch, setSearchQuery } from 'store/searchQuerySlice';
import { setCharacters, selectCharacters } from 'store/searchResultsSlice';

const Home: React.FC = () => {
  const searchValue = useAppSelector(selectSearch);
  const searchResults = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(searchValue);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
    dispatch(setSearchQuery(inputValue));
  };

  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoaded(false);
    (async () => {
      try {
        const [info, results] = await characterService.getAll(
          searchValue,
          currentPage,
          abortController.signal
        );
        if (results) {
          dispatch(setCharacters(results));
          setIsLastPage(!info.next);
        } else {
          dispatch(setCharacters([]));
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
  }, [searchValue, currentPage, dispatch]);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Search value={inputValue} setValue={handleInput} placeholder="search..." />
        <Button type="submit">Search</Button>
      </form>
      <HomeGrid data={searchResults} isLoaded={isLoaded} />
      {searchResults.length ? (
        <Pagination next={nextPage} prev={prevPage} page={currentPage} isLastPage={isLastPage} />
      ) : null}
    </div>
  );
};

export default Home;
